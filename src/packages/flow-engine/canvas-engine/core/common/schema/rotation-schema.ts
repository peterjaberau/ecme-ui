import { RotationSchemaDecoration, Schema } from '@flow/utils'
import type { RotationSchema } from '@flow/utils'

import { EntityData } from '../entity-data'

export { RotationSchema, RotationSchemaDecoration }

export class RotationData extends EntityData<RotationSchema> {
    static type = 'RotationData'

    getDefaultData(): RotationSchema {
        return Schema.createDefault<RotationSchema>(RotationSchemaDecoration)
    }
}
