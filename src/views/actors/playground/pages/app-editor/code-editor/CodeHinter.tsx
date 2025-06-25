import React from 'react'
import './styles.css'
import SingleLineCodeEditor from './SingleLineCodeEditor'
import MultiLineCodeEditor from './MultiLineCodeEditor'
import usePortal from '@/views/actors/playground/_hooks/use-portal'
import { Tooltip } from '../../../_components/Tooltip'
import { isNumber } from 'lodash'
import TJDBCodeEditor from './TJDBHinter'
import { Box, Image } from '@chakra-ui/react'

const CODE_EDITOR_TYPE = {
    fxEditor: SingleLineCodeEditor.EditorBridge,
    basic: SingleLineCodeEditor,
    multiline: MultiLineCodeEditor,
    extendedSingleLine: SingleLineCodeEditor,
    tjdbHinter: TJDBCodeEditor,
}

const CodeHinter: any = ({
    type = 'basic',
    initialValue,
    componentName,
    disabled,
    renderCopilot,
    ...restProps
}) => {
    const darkMode = localStorage.getItem('darkMode') === 'true'

    const [isOpen, setIsOpen] = React.useState(false)

    const handleTogglePopupExapand = () => {
        const changeOpen = (newOpen) => {
            setIsOpen(newOpen)
            if (typeof restProps?.popOverCallback === 'function')
                restProps?.popOverCallback(newOpen)
        }

        if (!isOpen) {
            changeOpen(true)
        }

        return new Promise((resolve: any) => {
            const element = document.getElementsByClassName('portal-container')
            if (element) {
                const checkPortalExits =
                    element[0]?.classList.contains(componentName)

                if (checkPortalExits === false) {
                    const parent = element[0].parentNode
                    parent.removeChild(element[0])
                }

                changeOpen(false)
                resolve()
            }
        }).then(() => {
            changeOpen(true)
            forceUpdate()
        })
    }
    const [, forceUpdate] = React.useReducer((x) => x + 1, 0)

    const RenderCodeEditor = CODE_EDITOR_TYPE[type]

    return (
        <RenderCodeEditor
            renderCopilot={renderCopilot}
            type={type}
            initialValue={initialValue}
            darkMode={darkMode}
            portalProps={{
                isOpen,
                setIsOpen,
                handleTogglePopupExapand,
                forceUpdate,
            }}
            componentName={componentName}
            disabled={disabled}
            {...restProps}
        />
    )
}

const Portal = ({ children, ...restProps }) => {
    const renderPortal = usePortal({ children, ...restProps })

    return <React.Fragment>{renderPortal}</React.Fragment>
}

const PopupIcon = ({
    callback,
    icon,
    tip,
    position,
    isMultiEditor = false,
    isQueryManager = false,
}) => {
    const size = 16
    const topRef = isNumber(position?.height)
        ? Math.floor(position?.height) - 30
        : 32
    let top = isMultiEditor ? 270 : topRef > 32 ? topRef : 0
    // for query manager we allow the height of query manager to be dynamic, so we need to render the popup icon at the bottom of code editor
    const renderAtBottom = isQueryManager && (isMultiEditor || topRef > 32)

    return (
        <Box
            display="flex"
            justifyContent="flex-end"
            width="100%"
            position="absolute"
            className="codehinter-popup-icon"
            bottom={renderAtBottom ? '30px' : undefined}
            top={renderAtBottom ? undefined : `${top}px`}
        >
            <Tooltip
                label={tip}
                placement="top"
                openDelay={800}
                closeDelay={100}
            >
                <Image
                    src={`assets/images/icons/${icon}.svg`}
                    width={`${size}px`}
                    height={`${size}px`}
                    zIndex={10000}
                    margin={2}
                    className="svg-icon popup-btn"
                    cursor="pointer"
                    onClick={(e) => {
                        e.stopPropagation()
                        callback()
                    }}
                />
            </Tooltip>
        </Box>
        // <Flex justify={'flex-end'} width={'100%'} position={'absolute'}
        //   className="codehinter-popup-icon"
        //   style={renderAtBottom ? { bottom: '30px' } : { top: top }}
        // >
        //   <OverlayTrigger
        //     trigger={['hover', 'focus']}
        //     placement="top"
        //     delay={{ show: 800, hide: 100 }}
        //     overlay={<Tooltip id="button-tooltip" content={tip}/>}
        //   >
        //     <img
        //       style={{ zIndex: 10000 }}
        //       className="svg-icon m-2 popup-btn"
        //       src={`assets/images/icons/${icon}.svg`}
        //       width={size}
        //       height={size}
        //       onClick={(e) => {
        //         e.stopPropagation();
        //         callback();
        //       }}
        //     />
        //   </OverlayTrigger>
        // </Flex>
    )
}


CodeHinter.Portal = Portal
CodeHinter.PopupIcon = PopupIcon


export default CodeHinter
