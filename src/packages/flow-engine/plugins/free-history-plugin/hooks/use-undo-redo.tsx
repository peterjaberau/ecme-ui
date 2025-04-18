import { useEffect, useState } from 'react'

import { useService } from '@flow/canvas-core'
import { HistoryService } from '@flow/history'

interface UndoRedo {
    canUndo: boolean
    canRedo: boolean
    undo: () => Promise<void>
    redo: () => Promise<void>
}

export function useUndoRedo(): UndoRedo {
    const historyService = useService<HistoryService>(HistoryService)
    const [canUndo, setCanUndo] = useState(false)
    const [canRedo, setCanRedo] = useState(false)

    useEffect(() => {
        const toDispose = historyService.undoRedoService.onChange(() => {
            setCanUndo(historyService.canUndo())
            setCanRedo(historyService.canRedo())
        })
        return () => {
            toDispose.dispose()
        }
    }, [])

    return {
        canUndo,
        canRedo,
        undo: () => historyService.undo(),
        redo: () => historyService.redo(),
    }
}
