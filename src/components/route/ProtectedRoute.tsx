import appConfig from '@/configs/app.config'
import { APP_CONSTANTS } from '@/internals/constants'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '@/auth'

const { unAuthenticatedEntryPath } = appConfig

const ProtectedRoute = () => {
    const { authenticated } = useAuth()

    const { pathname } = useLocation()

    const getPathName =
        pathname === '/' ? '' : `?${APP_CONSTANTS.REDIRECT_URL_KEY}=${location.pathname}`

    if (!authenticated) {
        return (
            <Navigate
                replace
                to={`${unAuthenticatedEntryPath}${getPathName}`}
            />
        )
    }

    return <Outlet />
}

export default ProtectedRoute
