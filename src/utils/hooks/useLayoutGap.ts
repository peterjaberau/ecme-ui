import { useThemeStore } from '@/store/themeStore'
import {
    THEME_CONSTANTS,
} from '@/internals/constants'

const useLayoutGap = () => {
    const layoutType = useThemeStore((state) => state.layout.type)

    const getTopGapValue = () => {
        switch (layoutType) {
            case THEME_CONSTANTS.LAYOUT_COLLAPSIBLE_SIDE:
                return THEME_CONSTANTS.HEADER_HEIGHT + 24
            case THEME_CONSTANTS.LAYOUT_FRAMELESS_SIDE:
                return THEME_CONSTANTS.HEADER_HEIGHT + 24
            default:
                return THEME_CONSTANTS.HEADER_HEIGHT + 24
        }
    }

    return {
        getTopGapValue,
    }
}

export default useLayoutGap
