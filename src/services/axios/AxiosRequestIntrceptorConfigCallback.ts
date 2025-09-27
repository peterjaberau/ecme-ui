import appConfig from '@/configs/app.config'
import {
    API_CONSTANTS,
} from '@/internals/constants'
import type { InternalAxiosRequestConfig } from 'axios'

const { TOKEN_TYPE, REQUEST_HEADER_AUTH_KEY, TOKEN_NAME_IN_STORAGE }= API_CONSTANTS

const AxiosRequestIntrceptorConfigCallback = (
    config: InternalAxiosRequestConfig,
) => {
    const storage = appConfig.accessTokenPersistStrategy

    if (storage === 'localStorage' || storage === 'sessionStorage') {
        let accessToken = ''

        if (storage === 'localStorage') {
            accessToken = localStorage.getItem(TOKEN_NAME_IN_STORAGE) || ''
        }

        if (storage === 'sessionStorage') {
            accessToken = sessionStorage.getItem(TOKEN_NAME_IN_STORAGE) || ''
        }

        if (accessToken) {
            config.headers[REQUEST_HEADER_AUTH_KEY] =
                `${TOKEN_TYPE}${accessToken}`
        }
    }

    return config
}

export default AxiosRequestIntrceptorConfigCallback
