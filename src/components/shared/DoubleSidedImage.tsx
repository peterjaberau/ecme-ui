import { useThemeStore } from '@/store/themeStore'
import { THEME_CONSTANTS } from '@/internals/constants'
import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

interface DoubleSidedImageProps
    extends DetailedHTMLProps<
        ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    > {
    darkModeSrc: string
}

const { MODE_DARK } = THEME_CONSTANTS

const DoubleSidedImage = ({
    src,
    darkModeSrc,
    alt = '',
    ...rest
}: DoubleSidedImageProps) => {
    const mode = useThemeStore((state) => state.mode)

    return (
        <img src={mode === MODE_DARK ? darkModeSrc : src} alt={alt} {...rest} />
    )
}

export default DoubleSidedImage
