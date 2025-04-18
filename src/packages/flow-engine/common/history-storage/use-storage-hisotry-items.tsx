import { groupBy } from 'lodash'
import { useLiveQuery } from 'dexie-react-hooks'
import { HistoryItem, HistoryOperation, HistoryStack } from '@flow/history'

import { HistoryStorageManager } from './history-storage-manager'
export function useStorageHistoryItems(
    historyStorageManager: HistoryStorageManager,
    resourceURI: string,
): {
    items: HistoryItem[]
} {
    const items: HistoryItem[] =
        useLiveQuery(async () => {
            const [historyItems, operations] = await Promise.all([
                historyStorageManager.db.allHistoryByResourceURI(resourceURI),
                historyStorageManager.db.allOperationByResourceURI(resourceURI),
            ])

            const grouped = groupBy<HistoryOperation>(
                operations.map((o) => ({
                    id: o.uuid,
                    timestamp: o.timestamp,
                    type: o.type,
                    label: o.label,
                    description: o.description,
                    value: o.value ? JSON.parse(o.value) : undefined,
                    uri: o.uri,
                    historyId: o.historyId,
                })),
                'historyId',
            )
            return historyItems
                .sort((a, b) => (b.id as number) - (a.id as number))
                .map(
                    (historyItem) =>
                        ({
                            id: historyItem.uuid,
                            type: historyItem.type,
                            timestamp: historyItem.timestamp,
                            operations: grouped[historyItem.uuid] || [],
                            time: HistoryStack.dateFormat(
                                historyItem.timestamp,
                            ),
                            uri: historyItem.resourceURI,
                        }) as HistoryItem,
                )
        }, [resourceURI]) || []

    return {
        items,
    }
}
