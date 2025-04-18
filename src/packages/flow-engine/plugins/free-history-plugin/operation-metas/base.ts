import { type OperationMeta } from '@flow/history'

export const baseOperationMeta: Partial<OperationMeta> = {
    shouldMerge: (_op, prev, element) => {
        if (!prev) {
            return false
        }

        if (
            // 合并500ms内的操作, 如删除节点会联动删除线条
            Date.now() - element.getTimestamp() <
            500
        ) {
            return true
        }
        return false
    },
}
