import { ScaleSchemaDecoration, Schema } from '@flow/utils'
import type { ScaleSchema } from '@flow/utils'

import { EntityData } from '../entity-data'

export { ScaleSchema, ScaleSchemaDecoration }

export class ScaleData extends EntityData<ScaleSchema> implements ScaleSchema {
    static type = 'ScaleData'

    getDefaultData(): ScaleSchema {
        return Schema.createDefault(ScaleSchemaDecoration)
    }

    get x(): number {
        return this.data.x
    }

    get y(): number {
        return this.data.y
    }

    set x(x: number) {
        this.update('x', x)
    }

    set y(y: number) {
        this.update('y', y)
    }
}
