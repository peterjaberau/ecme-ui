import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '../components/ui/resizable'
import Card from '@/components/ui/Card'
import Menu from '@/components/ui/Menu'
import Tooltip from '@/components/ui/Tooltip'
import Upload from '@/components/ui/Upload'
import Button from '@/components/ui/Button'
import { LuImage } from 'react-icons/lu'
import { Stack, HStack, Center, Box, For } from '@chakra-ui/react'
import {
    TbBan,
    TbLayoutGrid,
    TbList,
    TbPlus,
    TbRectangle,
    TbSettings,
    TbUserPlus,
} from 'react-icons/tb'
import {
    HiOutlineCog,
    HiOutlineChat,
} from 'react-icons/hi'
import Segment from '../../../../components/ui/Segment'
import { ReactNode } from 'react'
import { RenderWidget } from './app-builder/app-canvas/RenderWidget'
import { PropertiesInspector } from './app-builder/inspectors/properties.inspector'
import { Inspector } from './app-editor/inspector/inspector'
import { StateInspector } from './app-builder/inspectors/state.inspector'

const MenuContent = ({ icon, label }: { icon: ReactNode; label: string }) => {
    return (
        <Center className="flex items-center gap-2">
            <Box className={'text-2xl'}>{icon}</Box>
            <Box>{label}</Box>
        </Center>
    )
}


const Page = () => {
    return (
        <ResizablePanelGroup className={'h-full'} direction="vertical">
            <ResizablePanel style={{ maxHeight: '60px' }}>
                <Card className="h-full" />
            </ResizablePanel>
            <ResizableHandle disabled />
            <ResizablePanel>
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel
                        style={{ width: 'auto', maxWidth: '200px' }}
                    >
                        <Card>
                            <Menu>
                                <Menu.MenuItem eventKey="settings">
                                    <MenuContent
                                        icon={<HiOutlineCog />}
                                        label="Settings"
                                    />
                                </Menu.MenuItem>
                                <Menu.MenuItem eventKey="messages">
                                    <MenuContent
                                        icon={<HiOutlineChat />}
                                        label="Messages"
                                    />
                                </Menu.MenuItem>
                            </Menu>
                        </Card>
                    </ResizablePanel>
                    <ResizableHandle disabled />
                    <ResizablePanel>
                        <Card
                            header={{
                                content: 'Overview',
                                extra: <Button size="sm">All projects</Button>,
                                bordered: false,
                            }}
                            className="h-full"
                            bodyClass="h-full "
                        >
                            <RenderWidget />
                        </Card>
                    </ResizablePanel>
                    <ResizableHandle  />
                    <ResizablePanel>
                        <Card
                            header={{
                                content: 'Inspector',
                                extra: (
                                    <HStack>
                                        <Button
                                            size="sm"
                                            icon={<TbUserPlus />}
                                        />
                                        <Button
                                            size="sm"
                                            icon={<TbSettings />}
                                        />
                                        <Button
                                            size="sm"
                                            icon={<TbPlus />}
                                        >
                                            New Board
                                        </Button>
                                    </HStack>
                                ),
                                bordered: false,
                            }}
                            className="h-full"
                            bodyClass="h-full overflow-y-auto"
                        >
                            <StateInspector />
                        </Card>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel>
                        <Card
                            header={{
                                content: 'Inspector JSONTree',
                                extra: (
                                    <HStack>

                                        <Button
                                            size="sm"
                                            icon={<TbPlus />}
                                        >
                                            New Board
                                        </Button>
                                    </HStack>
                                ),
                                bordered: false,
                            }}
                            className="h-full"
                            bodyClass="h-full overflow-y-auto"
                        >
                            {/*<PropertiesInspector />*/}
                            <Inspector />
                        </Card>
                    </ResizablePanel>
                    {/*<ResizableHandle withHandle />*/}
                    {/*<ResizablePanel>*/}
                    {/*    <ResizablePanelGroup direction="vertical">*/}

                    {/*        <ResizablePanel>*/}
                    {/*            <Card*/}
                    {/*                header={{*/}
                    {/*                    content: 'File Manager',*/}
                    {/*                    extra: (*/}
                    {/*                        <HStack>*/}
                    {/*                            <Center>*/}
                    {/*                                <Segment>*/}
                    {/*                                    <Segment.Item*/}
                    {/*                                        value="grid"*/}
                    {/*                                        className="text-xl px-3"*/}
                    {/*                                    >*/}
                    {/*                                        <TbLayoutGrid />*/}
                    {/*                                    </Segment.Item>*/}
                    {/*                                    <Segment.Item*/}
                    {/*                                        value="list"*/}
                    {/*                                        className="text-xl px-3"*/}
                    {/*                                    >*/}
                    {/*                                        <TbList />*/}
                    {/*                                    </Segment.Item>*/}
                    {/*                                </Segment>*/}
                    {/*                            </Center>*/}
                    {/*                        </HStack>*/}
                    {/*                    ),*/}
                    {/*                    bordered: false,*/}
                    {/*                }}*/}
                    {/*                className="h-full"*/}
                    {/*                bodyClass="h-full"*/}
                    {/*            />*/}
                    {/*        </ResizablePanel>*/}
                    {/*        <ResizableHandle withHandle />*/}
                    {/*        /!*style={{ minHeight: '220px' }}*!/*/}
                    {/*        <ResizablePanel className="">*/}
                    {/*            <Card className="h-full " bodyClass="h-full ">*/}
                    {/*                <Stack*/}
                    {/*                    gap={'4'}*/}
                    {/*                    h="full"*/}
                    {/*                    justify={'space-between'}*/}
                    {/*                >*/}
                    {/*                    <div className="flex flex-1 gap-4 mb-4">*/}
                    {/*                        <div className="flex-1">*/}
                    {/*                            <div className="heading-text text-base font-semibold">*/}
                    {/*                                Prompt*/}
                    {/*                            </div>*/}
                    {/*                            <textarea*/}
                    {/*                                className="w-full  resize-none mt-1 placeholder:text-gray-400 bg-transparent focus:outline-hidden heading-text"*/}
                    {/*                                placeholder="Decribe the image you want to generate"*/}
                    {/*                            />*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="flex flex-col lg:flex-row gap-6 justify-between">*/}
                    {/*                        <div className="inline-flex flex-wrap gap-2">*/}
                    {/*                            <Tooltip title="Add image">*/}
                    {/*                                <Upload*/}
                    {/*                                    showList={false}*/}
                    {/*                                    uploadLimit={1}*/}
                    {/*                                >*/}
                    {/*                                    <Button*/}
                    {/*                                        size="sm"*/}
                    {/*                                        icon={<LuImage />}*/}
                    {/*                                    />*/}
                    {/*                                </Upload>*/}
                    {/*                            </Tooltip>*/}

                    {/*                            <Button*/}
                    {/*                                size="sm"*/}
                    {/*                                className="py-1"*/}
                    {/*                            >*/}
                    {/*                                <div className="flex gap-2 items-center">*/}
                    {/*                                    <span className="text-xl">*/}
                    {/*                                        <TbRectangle />*/}
                    {/*                                    </span>*/}
                    {/*                                    Lanscape (4:3)*/}
                    {/*                                </div>*/}
                    {/*                            </Button>*/}

                    {/*                            <Button*/}
                    {/*                                size="sm"*/}
                    {/*                                className="py-1"*/}
                    {/*                            >*/}
                    {/*                                <div className="flex gap-2 items-center">*/}
                    {/*                                    <span className="text-xl">*/}
                    {/*                                        <TbBan />*/}
                    {/*                                    </span>*/}
                    {/*                                    No style*/}
                    {/*                                </div>*/}
                    {/*                            </Button>*/}

                    {/*                            <Button*/}
                    {/*                                size="sm"*/}
                    {/*                                className="py-1"*/}
                    {/*                            >*/}
                    {/*                                <div className="flex gap-2 items-center">*/}
                    {/*                                    <span className="text-xl">*/}
                    {/*                                        <TbBan />*/}
                    {/*                                    </span>*/}
                    {/*                                    No tone*/}
                    {/*                                </div>*/}
                    {/*                            </Button>*/}

                    {/*                            <Button*/}
                    {/*                                size="sm"*/}
                    {/*                                className="py-1"*/}
                    {/*                            >*/}
                    {/*                                <div className="flex gap-2 items-center">*/}
                    {/*                                    <span className="text-xl">*/}
                    {/*                                        <TbBan />*/}
                    {/*                                    </span>*/}
                    {/*                                    No lighting*/}
                    {/*                                </div>*/}
                    {/*                            </Button>*/}

                    {/*                            <Button*/}
                    {/*                                size="sm"*/}
                    {/*                                className="py-1"*/}
                    {/*                            >*/}
                    {/*                                <div className="flex gap-2 items-center">*/}
                    {/*                                    <span className="text-xl">*/}
                    {/*                                        <TbBan />*/}
                    {/*                                    </span>*/}
                    {/*                                    No camera*/}
                    {/*                                </div>*/}
                    {/*                            </Button>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="flex flex-col sm:flex-row sm:justify-end gap-4">*/}
                    {/*                            <Button*/}
                    {/*                                size="sm"*/}
                    {/*                                shape="circle"*/}
                    {/*                            >*/}
                    {/*                                Clear*/}
                    {/*                            </Button>*/}
                    {/*                            <Button*/}
                    {/*                                size="sm"*/}
                    {/*                                variant="solid"*/}
                    {/*                                shape="circle"*/}
                    {/*                            >*/}
                    {/*                                Generate*/}
                    {/*                            </Button>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </Stack>*/}
                    {/*            </Card>*/}
                    {/*        </ResizablePanel>*/}
                    {/*    </ResizablePanelGroup>*/}
                    {/*</ResizablePanel>*/}
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}
export default Page

