import { useState } from 'react'
import {
    SYSTEM_CONSTANTS,
} from '@/internals/constants'
import StackedSideNavMini, { SelectedMenuItem } from './StackedSideNavMini'
import StackedSideNavSecondary from './StackedSideNavSecondary'
import useResponsive from '@/utils/hooks/useResponsive'
import { useThemeStore } from '@/store/themeStore'
import { useRouteKeyStore } from '@/store/routeKeyStore'
import { useSessionUser } from '@/store/authStore'
import navigationConfig from '@/configs/navigation.config'
import appConfig from '@/configs/app.config'
import isEmpty from 'lodash/isEmpty'
import useTranslation from '@/utils/hooks/useTranslation'
import type { TraslationFn } from '@/@types/common'

const stackedSideNavDefaultStyle = {
    width: SYSTEM_CONSTANTS.theme.SPLITTED_SIDE_NAV_MINI_WIDTH,
}

const StackedSideNav = ({
    translationSetup = appConfig.activeNavTranslation,
}: {
    translationSetup?: boolean
}) => {
    const { t } = useTranslation(!translationSetup)

    const [selectedMenu, setSelectedMenu] = useState<SelectedMenuItem>({})
    const [activeKeys, setActiveKeys] = useState<string[]>([])

    const mode = useThemeStore((state) => state.mode)
    const direction = useThemeStore((state) => state.direction)

    const currentRouteKey = useRouteKeyStore((state) => state.currentRouteKey)

    const userAuthority = useSessionUser((state) => state.user.authority)

    const { larger } = useResponsive()

    const navColor = (navType: string, mode: string) => {
        return `${navType}-${mode}`
    }

    const handleChange = (selected: SelectedMenuItem) => {
        setSelectedMenu(selected)
    }

    const handleCollpase = () => {
        setSelectedMenu({})
        setActiveKeys([])
    }

    const handleSetActiveKey = (key: string[]) => {
        setActiveKeys(key)
    }

    const stackedSideNavSecondaryDirStyle = () => {
        let style = {}
        const marginValue = `${-SYSTEM_CONSTANTS.theme.STACKED_SIDE_NAV_SECONDARY_WIDTH}px`
        if (direction === SYSTEM_CONSTANTS.theme.DIR_LTR) {
            style = { marginLeft: marginValue }
        }

        if (direction === SYSTEM_CONSTANTS.theme.DIR_RTL) {
            style = { marginRight: marginValue }
        }

        return style
    }

    return (
        <>
            {larger.md && (
                <div className={`stacked-side-nav`}>
                    <StackedSideNavMini
                        className={`stacked-side-nav-mini ${navColor(
                            'stacked-side-nav-mini',
                            mode,
                        )}`}
                        style={stackedSideNavDefaultStyle}
                        routeKey={currentRouteKey}
                        activeKeys={activeKeys}
                        mode={mode}
                        direction={direction}
                        navigationTree={navigationConfig}
                        userAuthority={userAuthority || []}
                        selectedMenu={selectedMenu}
                        t={t as TraslationFn}
                        onChange={handleChange}
                        onSetActiveKey={handleSetActiveKey}
                    />
                    <div
                        className={`stacked-side-nav-secondary ${navColor(
                            'stacked-side-nav-secondary',
                            mode,
                        )}`}
                        style={{
                            width: SYSTEM_CONSTANTS.theme.STACKED_SIDE_NAV_SECONDARY_WIDTH,
                            ...(isEmpty(selectedMenu)
                                ? stackedSideNavSecondaryDirStyle()
                                : {}),
                        }}
                    >
                        {!isEmpty(selectedMenu) && (
                            <StackedSideNavSecondary
                                title={t(
                                    selectedMenu.translateKey as string,
                                    selectedMenu.title as string,
                                )}
                                menu={selectedMenu.menu}
                                routeKey={currentRouteKey}
                                direction={direction}
                                translationSetup={translationSetup}
                                userAuthority={userAuthority || []}
                                onCollapse={handleCollpase}
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default StackedSideNav
