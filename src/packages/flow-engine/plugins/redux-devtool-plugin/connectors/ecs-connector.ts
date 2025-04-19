import { inject, injectable } from 'inversify'
import { EntityManager } from '@flow/canvas-core'

import { BaseConnector } from './base'

@injectable()
export class ECSConnector extends BaseConnector {
    @inject(EntityManager) protected entityManager: EntityManager | any

    getName(): string {
        return '@flowgram.ai/EntityManager'
    }

    getState() {
        return this.entityManager.storeState({ configOnly: false })
    }

    onInit() {
        this.entityManager.onEntityLifeCycleChange((action: any) => {
            this.send(
                `${action.type}/${action.entity.type}/${action.entity.id}`,
            )
        })
    }
}
