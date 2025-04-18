import { injectable } from 'inversify'
import { FlowNodeEntity } from '@flow/canvas-document'
import { FlowNodeJSON } from '@flow/canvas-document'
import { PluginContext } from '@flow/canvas-core'

import {
    FixedHistoryPluginOptions,
    GetBlockLabel,
    GetNodeLabel,
    GetNodeLabelById,
    GetNodeURI,
    NodeToJson,
} from './types'

@injectable()
export class FixedHistoryConfig {
    init(ctx: PluginContext, options: FixedHistoryPluginOptions) {
        if (options.nodeToJSON) {
            this.nodeToJSON = options.nodeToJSON(ctx)
        }

        if (options.getNodeLabelById) {
            this.getNodeLabelById = options.getNodeLabelById(ctx)
        }

        if (options.getNodeLabel) {
            this.getNodeLabel = options.getNodeLabel(ctx)
        }

        if (options.getBlockLabel) {
            this.getBlockLabel = options.getBlockLabel(ctx)
        }

        if (options.getNodeURI) {
            this.getNodeURI = options.getNodeURI(ctx)
        }
    }

    nodeToJSON: NodeToJson = (node: FlowNodeEntity) => node.toJSON()

    getNodeLabelById: GetNodeLabelById = (id: string) => id

    getNodeLabel: GetNodeLabel = (node: FlowNodeJSON) => node.id

    getBlockLabel: GetBlockLabel = (node: FlowNodeJSON) => node.id

    getNodeURI: GetNodeURI = (id: string) => `node:${id}`

    getParentName(parentId?: string) {
        return parentId ? this.getNodeLabelById(parentId) : 'root'
    }
}
