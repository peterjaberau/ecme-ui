import { Provider } from './provider'
import { GlobalPlaygroundProvider } from './actors/playground.provider'
import Page from './pages'

export const AppPlayground = ({ children }: any) => {
    return (
        <GlobalPlaygroundProvider>
            <div className="flex flex-col gap-4">
                <Provider>
                    <Page/>
                </Provider>
            </div>
        </GlobalPlaygroundProvider>
    )
}
