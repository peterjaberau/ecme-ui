import ScrollBar from '@/components/ui/ScrollBar'
import classNames from '@/utils/classNames'
import { SYSTEM_CONSTANTS } from '@/internals/constants'
import VerticalMenuContent from '@/components/template/VerticalMenuContent'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'
import type { NavigationTree } from '@/@types/navigation'
import type { Direction } from '@/@types/theme'

type StackedSideNavSecondaryProps = {
    className?: string
    title: string
    menu?: NavigationTree[]
    routeKey: string
    onCollapse: () => void
    direction?: Direction
    translationSetup?: boolean
    userAuthority: string[]
}

const StackedSideNavSecondary = (props: StackedSideNavSecondaryProps) => {
    const {
        className,
        title,
        menu,
        routeKey,
        onCollapse,
        direction,
        translationSetup,
        userAuthority,
        ...rest
    } = props

    const handleCollpase = () => {
        onCollapse()
    }

    return (
        <div className={classNames('h-full', className)} {...rest}>
            <div
                className={`flex items-center justify-between gap-4 pl-6 pr-4`}
                style={{ height: SYSTEM_CONSTANTS.theme.HEADER_HEIGHT }}
            >
                <h5 className="font-bold">{title}</h5>
                <button
                    type="button"
                    className="close-button"
                    onClick={handleCollpase}
                >
                    {direction === SYSTEM_CONSTANTS.theme.DIR_LTR && <HiOutlineArrowSmLeft />}
                    {direction === SYSTEM_CONSTANTS.theme.DIR_RTL && <HiOutlineArrowSmRight />}
                </button>
            </div>
            <ScrollBar autoHide direction={direction}>
                <VerticalMenuContent
                    routeKey={routeKey}
                    navigationTree={menu}
                    translationSetup={translationSetup}
                    userAuthority={userAuthority}
                />
            </ScrollBar>
        </div>
    )
}

export default StackedSideNavSecondary
