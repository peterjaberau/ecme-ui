import { injectable } from 'inversify'
import { Emitter, type Event, type MaybePromise } from '@flow/utils'

export const ClipboardService = Symbol('ClipboardService')

export interface ClipboardService {
    onClipboardChanged: Event<string>
    readText(): MaybePromise<string>

    writeText(value: string): MaybePromise<void>
}

/**
 * 剪贴板服务，一般用于管理临时的复制黏贴数据
 * TODO: 后续可以支持调用浏览器
 */
@injectable()
export class DefaultClipboardService implements ClipboardService {
    private _currentData: string | any

    protected readonly onClipboardChangedEmitter = new Emitter<string>()

    readonly onClipboardChanged: Event<string> =
        this.onClipboardChangedEmitter.event

    readText(): string {
        return this._currentData
    }

    writeText(value: string): void {
        if (this._currentData !== value) {
            this._currentData = value
            this.onClipboardChangedEmitter.fire(value)
        }
    }
}
