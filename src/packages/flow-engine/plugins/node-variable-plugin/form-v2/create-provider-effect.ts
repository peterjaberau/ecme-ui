import {
    FlowNodeVariableData,
    type Scope,
    ASTKind,
} from '@flow/variable-plugin'
import { DataEvent, type Effect, type EffectOptions } from '@flow/node-engine'
import { FlowNodeEntity } from '@flow/canvas-document'

import { type VariableProviderAbilityOptions } from '../types'

/**
 * 根据 VariableProvider 生成 FormV2 的 Effect
 * @param options
 * @returns
 */
export function createEffectFromVariableProvider(
    options: VariableProviderAbilityOptions,
): EffectOptions[] {
    const getScope = (node: FlowNodeEntity): Scope => {
        const variableData: FlowNodeVariableData =
            node.getData(FlowNodeVariableData)

        if (options.private) {
            return variableData.initPrivate()
        }
        return variableData.public
    }

    const transformValueToAST: Effect = ({ value, context }) => {
        if (!context) {
            return
        }
        const { node } = context
        const scope = getScope(node)

        scope.ast.set(options.namespace || '', {
            kind: ASTKind.VariableDeclarationList,
            declarations: options.parse(value, {
                node,
                scope,
                options,
                formItem: undefined,
            }),
        })
    }

    return [
        {
            event: DataEvent.onValueInit,
            effect: ((params) => {
                const { context } = params

                const scope = getScope(context.node)
                const disposable = options.onInit?.({
                    node: context.node,
                    scope,
                    options,
                    formItem: undefined,
                    // Hack: 新表单引擎暂时不支持 triggerSync
                    triggerSync: undefined as any,
                })

                if (disposable) {
                    // 作用域销毁时同时销毁该监听
                    scope.toDispose.push(disposable)
                }

                transformValueToAST(params)
            }) as Effect,
        },
        {
            event: DataEvent.onValueChange,
            effect: ((params) => {
                transformValueToAST(params)
            }) as Effect,
        },
    ]
}
