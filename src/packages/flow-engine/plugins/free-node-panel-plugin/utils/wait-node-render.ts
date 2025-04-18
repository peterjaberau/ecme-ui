import { delay } from '@flow/free-layout-core'

export type IWaitNodeRender = () => Promise<void>

export const waitNodeRender: IWaitNodeRender = async () => {
    await delay(20)
}
