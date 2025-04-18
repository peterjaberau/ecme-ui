import {
    FlowNodeVariableData,
    FreeLayoutScopeChain,
    FixedLayoutScopeChain,
    VariableLayoutConfig,
} from '@flow/variable-layout'
import {
    VariableContainerModule,
    ASTNodeRegistry,
    ASTRegisters,
    VariableEngine,
    ScopeChain,
} from '@flow/variable-core'
import { FlowDocument } from '@flow/canvas-document'
import { PluginContext, definePluginCreator } from '@flow/canvas-core'
import { EntityManager } from '@flow/canvas-core'

/**
 * @deprecated 请使用 @injectToAst(XXXService) declare xxxService: XXXService 实现外部依赖注入
 */
type Injector = (ctx: PluginContext) => Record<string, any>

export interface VariablePluginOptions {
    enable?: boolean
    // 业务扩展 AST 节点
    extendASTNodes?: (
        | ASTNodeRegistry
        | [ASTNodeRegistry]
        | [ASTNodeRegistry, Injector]
    )[]
    // 布局方式
    layout?: 'fixed' | 'free'
    // 布局配置
    layoutConfig?: VariableLayoutConfig
}

export const createVariablePlugin = definePluginCreator<VariablePluginOptions>({
    onBind({ bind }, opts) {
        const { layout, layoutConfig } = opts

        if (layout === 'free') {
            bind(ScopeChain).to(FreeLayoutScopeChain).inSingletonScope()
        }
        if (layout === 'fixed') {
            bind(ScopeChain).to(FixedLayoutScopeChain).inSingletonScope()
        }
        if (layoutConfig) {
            bind(VariableLayoutConfig).toConstantValue(layoutConfig || {})
        }
    },
    onInit(ctx, opts) {
        const { extendASTNodes } = opts || {}

        const variableEngine = ctx.get<VariableEngine>(VariableEngine)
        const astRegisters = ctx.get<ASTRegisters>(ASTRegisters)
        const entityManager = ctx.get<EntityManager>(EntityManager)
        const document = ctx.get<FlowDocument>(FlowDocument)

        /**
         * 注册扩展 AST 节点
         */
        ;(extendASTNodes || []).forEach((info) => {
            if (Array.isArray(info)) {
                const [extendASTNode, injector] = info

                astRegisters.registerAST(
                    extendASTNode,
                    injector ? () => injector(ctx) : undefined,
                )

                return
            }

            astRegisters.registerAST(info)
        })

        /**
         * 扩展 FlowNodeVariableData
         */
        entityManager.registerEntityData(
            FlowNodeVariableData,
            () => ({ variableEngine }) as any,
        )
        document.registerNodeDatas(FlowNodeVariableData)
    },
    containerModules: [VariableContainerModule],
})
