import { Provider } from './provider'
import { GlobalPlaygroundProvider } from './actors/playground.provider'
import Page from './pages'

export const AppPlayground = () => {
    return (
        <Provider>
            <GlobalPlaygroundProvider>
                <div className="h-full flex flex-col">
                    <Page />
                </div>
            </GlobalPlaygroundProvider>
        </Provider>
    )
}


/*


export const AppPlayground = () => {
    return (
        <Provider>
            <GlobalPlaygroundProvider>
                <div className="flex flex-col gap-4">
                    <Page />
                </div>
            </GlobalPlaygroundProvider>
        </Provider>
    )
}


 */
