import { useLayoutEffect } from 'react'

import { Disposable } from '@flow/utils'

import { ConfigEntity, EntityManager, EntityRegistry } from '../common'
import { useRefresh } from './use-refresh'
import { usePlaygroundContainer } from './use-playground-container'

/**
 * 获取 config entity
 */
export function useConfigEntity<T extends ConfigEntity>(
    entityRegistry: EntityRegistry<T>,
    listenChange = false,
): T {
    const entityManager = usePlaygroundContainer().get(EntityManager)
    const entity = entityManager.getEntity<T>(entityRegistry, true) as T
    const refresh = useRefresh(entity.version)
    useLayoutEffect(() => {
        const dispose = listenChange
            ? entity.onEntityChange(() => {
                  refresh(entity.version)
              })
            : Disposable.NULL
        return () => dispose.dispose()
    }, [entityManager, refresh, entity, listenChange])
    return entity
}
