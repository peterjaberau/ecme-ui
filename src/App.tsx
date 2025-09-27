import { BrowserRouter, RouterProvider } from 'react-router-dom'
import Theme from '@/components/template/Theme'
import Layout from '@/components/layouts'
import { AuthProvider } from '@/auth'
import Views from '@/views'
import appConfig from './configs/app.config'
import './locales'
import { Provider } from './Provider'
if (appConfig.enableMock) {
    import('./mock')
}

function App() {
    return (
        <Provider>
            <Theme>
                <BrowserRouter>
                    <AuthProvider>
                        <Layout>
                            <Views />
                        </Layout>
                    </AuthProvider>
                </BrowserRouter>
            </Theme>
        </Provider>
    )
}

export default App
