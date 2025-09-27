import { lazy, Suspense } from 'react'
import { THEME_CONSTANTS } from '@/internals/constants'
import Loading from '@/components/shared/Loading'
import type { CommonProps } from '@/@types/common'
import type { LazyExoticComponent, JSX } from 'react'
import type { LayoutType } from '@/@types/theme'

type Layouts = Record<
    string,
    LazyExoticComponent<<T extends CommonProps>(props: T) => JSX.Element>
>

interface PostLoginLayoutProps extends CommonProps {
    layoutType: LayoutType
}

const layouts: Layouts = {
    [THEME_CONSTANTS.LAYOUT_COLLAPSIBLE_SIDE]: lazy(
        () => import('./components/CollapsibleSide'),
    ),
    [THEME_CONSTANTS.LAYOUT_STACKED_SIDE]: lazy(() => import('./components/StackedSide')),
    [THEME_CONSTANTS.LAYOUT_TOP_BAR_CLASSIC]: lazy(() => import('./components/TopBarClassic')),
    [THEME_CONSTANTS.LAYOUT_FRAMELESS_SIDE]: lazy(() => import('./components/FrameLessSide')),
    [THEME_CONSTANTS.LAYOUT_CONTENT_OVERLAY]: lazy(() => import('./components/ContentOverlay')),
    [THEME_CONSTANTS.LAYOUT_BLANK]: lazy(() => import('./components/Blank')),
}

const PostLoginLayout = ({ layoutType, children }: PostLoginLayoutProps) => {
    const AppLayout = layouts[layoutType] ?? layouts[Object.keys(layouts)[0]]

    return (
        <Suspense
            fallback={
                <div className="flex flex-auto flex-col h-[100vh]">
                    <Loading loading={true} />
                </div>
            }
        >
            <AppLayout>{children}</AppLayout>
        </Suspense>
    )
}

export default PostLoginLayout
