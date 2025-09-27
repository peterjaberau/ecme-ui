import DemoLayout from '@/components/docs/DemoLayout'
import { SimpleGrid, Center, HStack } from '@chakra-ui/react'
import Basic from './basic'
import Calculator from './calculator'
import ChatWidget from './chat-widget'
import MediaPlayer from './media-player'
import NotesPanel from './notes-panel'
import SettingsPanel from './settings-panel'
import TaskInspector from './task-inspector'
import VideoCall from './video-call'
import { AccordionCatalog } from '../Accordion'
import { AvatarCatalog } from '../Avatar'
import ComponentsCatalog from '../_common/ComponentsCatalog'
const mdPath = 'FloatingPanel'

const demoHeader = {
    title: 'Floating Panel',
}





const demos = [
    {
        mdName: 'floating-panel',
        title: 'Floating Panel',
        mdPath: mdPath,
        desc: '',
        component: <ComponentsCatalog items={[
            {
                component: <Basic />,
            },
            {
                component: <ChatWidget />,
            },
            {
                component: <MediaPlayer />,
            },
            {
                component: <TaskInspector />,
            },
            {
                component: <SettingsPanel />,
            },
            {
                component: <NotesPanel />,
            },
            {
                component: <VideoCall />,
            },
            {
                component: <Calculator />,
            }
        ]} />,
    },



    {
        mdName: 'accordion',
        title: 'Accordion',
        mdPath: mdPath,
        desc: '',
        component: <AccordionCatalog />,
    },

    {
        mdName: 'avatar',
        title: 'Avatar',
        mdPath: mdPath,
        desc: '',
        component: <AvatarCatalog />,
    },

]


const FloatingPanel = () => {
    return (
        <>
            <DemoLayout header={demoHeader} demos={demos} />
        </>
    )
}

// @ts-ignore
export default FloatingPanel
