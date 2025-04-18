import { OpacitySchemaDecoration, Schema } from '@flow/utils'
import type { OpacitySchema } from '@flow/utils'

import { EntityData } from '../entity-data'

export { OpacitySchema, OpacitySchemaDecoration }

export class OpacityData extends EntityData<OpacitySchema> {
    static type = 'OpacityData'

    getDefaultData(): OpacitySchema {
        return Schema.createDefault<OpacitySchema>(OpacitySchemaDecoration)
    }
}
