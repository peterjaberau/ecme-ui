import Button from '@/components/ui/Button'
import InputGroup from '@/components/ui/InputGroup'
import useDirection from '@/utils/hooks/useDirection'
import { SYSTEM_CONSTANTS } from '@/internals/constants'
import type { Direction } from '@/@types/theme'

const dirList = [
    { value: SYSTEM_CONSTANTS.theme.DIR_LTR, label: 'LTR' },
    { value: SYSTEM_CONSTANTS.theme.DIR_RTL, label: 'RTL' },
]

const DirectionSwitcher = ({
    callBackClose,
}: {
    callBackClose?: () => void
}) => {
    const [direction, setDirection] = useDirection()

    const onDirChange = (val: Direction) => {
        setDirection(val)
        callBackClose?.()
    }

    return (
        <InputGroup size="sm">
            {dirList.map((dir) => (
                <Button
                    key={dir.value}
                    active={direction === dir.value}
                    onClick={() => onDirChange(dir.value)}
                >
                    {dir.label}
                </Button>
            ))}
        </InputGroup>
    )
}

export default DirectionSwitcher
