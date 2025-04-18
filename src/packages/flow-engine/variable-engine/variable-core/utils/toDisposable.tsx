import { Subscription } from 'rxjs'
import { Disposable } from '@flow/utils'

export function subsToDisposable(subscription: Subscription): Disposable {
    return Disposable.create(() => subscription.unsubscribe())
}
