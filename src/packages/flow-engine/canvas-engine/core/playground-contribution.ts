import { inject, injectable } from 'inversify'

import { PlaygroundConfig } from './playground-config'
import { type Playground } from './playground'
import {
    PipelineRegistry,
    type EditorState,
    EditorStateConfigEntity,
    type LayerRegistry,
} from './core'
import { EntityManager, type EntityRegistry } from './common'

export const PlaygroundContribution = Symbol('PlaygroundContribution')

export interface PlaygroundContribution {
    /**
     * 注册 Layer/Entity/Able 相关
     * @param registry
     * @deprecated
     */
    registerPlayground?(registry: PlaygroundRegistry): void
    /**
     * 初始化画布 (onReady 之前)
     * @param playground
     */
    onInit?(playground: Playground): void
    /**
     * 初始化 entity 完毕后触发
     * @param playground
     */
    onReady?(playground: Playground): void
    /**
     * 销毁
     * @param playground
     */
    onDispose?(playground: Playground): void

    /**
     * 所有 Layer 第一次渲染完毕后触发
     * @param playground
     */
    onAllLayersRendered?(playground: Playground): void
}

@injectable()
export class PlaygroundRegistry {
    @inject(PipelineRegistry) protected readonly pipeline: PipelineRegistry | any

    // @inject(AbleManager) readonly ableManager: AbleManager;

    @inject(EntityManager) readonly entityManager: EntityManager | any

    @inject(PlaygroundConfig) readonly playgroundConfig: PlaygroundConfig | any

    config(config: Partial<PlaygroundConfig>): void {
        Object.assign(this.playgroundConfig, config)
    }

    registerLayer(layerRegistry: LayerRegistry): void {
        this.pipeline.registerLayer(layerRegistry)
    }

    registerEntity(entityRegistry: EntityRegistry): void {
        this.entityManager.registerEntity(entityRegistry)
    }

    // registerAble(ableRegistry: AbleRegistry): void {
    //   this.ableManager.registerAble(ableRegistry);
    // }

    registerEditorState(state: EditorState | any): void {
        const stateConfig =
            //@ts-ignore
            this.entityManager.getEntity<EditorStateConfigEntity | any>(
                EditorStateConfigEntity,
            )
        stateConfig?.registerState(state)
    }
}
