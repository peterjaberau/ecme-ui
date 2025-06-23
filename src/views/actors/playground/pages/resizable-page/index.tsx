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
    HiOutlineGlobeAlt,
    HiOutlineSupport,
    HiWifi,
} from 'react-icons/hi'
import Segment from '../../../../components/ui/Segment'
import { ReactNode } from 'react'

const MenuContent = ({ icon, label }: { icon: ReactNode; label: string }) => {
    return (
        <Center className="flex items-center gap-2">
            <Box className={'text-2xl'}>{icon}</Box>
            <Box>{label}</Box>
        </Center>
    )
}

const defaultState = {
    root: {
        component: 'Panels',
        props: {
            direction: 'vertical',
            items: [
                {
                    component: 'PanelItem',
                    props: {
                        outer: { style: { maxHeight: '60px' } },
                        inner: {
                            withCard: true,
                        },
                    },
                },
                {
                    component: 'PanelItemSeparator',
                    props: {
                        disabled: true,
                    },
                },
                {
                    component: 'PanelItem',
                    props: {
                        outer: { style: { maxHeight: '60px' } },
                        inner: {
                            component: 'Panels',
                            props: {
                                direction: 'horizontal',
                                items: [
                                    {
                                        component: 'PanelItem',
                                        props: {
                                            outer: { style: { width: 'auto', maxWidth: '200px' } },
                                            inner: {
                                                withCard: true
                                            },
                                        },
                                    },
                                    {
                                        component: 'PanelItemSeparator',
                                        props: {
                                            disabled: true,
                                        },
                                    },
                                    {
                                        component: 'PanelItem',
                                        props: {
                                            outer: { style: { width: 'auto', maxWidth: '200px' } },
                                            inner: {
                                                withCard: true,
                                                title: 'Overview',
                                                extra: [
                                                    {
                                                        component: 'Button',
                                                        props: {
                                                            size: 'sm',
                                                            content: 'All projects',
                                                        }
                                                    }
                                                ]
                                            },
                                        },
                                    },
                                    {
                                        component: 'PanelItemSeparator',
                                    },
                                    {
                                        component: 'PanelItem',
                                        props: {
                                            inner: {
                                                component: 'Panels',
                                                props: {
                                                    direction: 'vertical',
                                                },
                                                items: [
                                                    {
                                                        component: 'PanelItem',
                                                        props: {
                                                            inner: {
                                                                withCard: true,
                                                                title: 'Sprint 2',
                                                                extra: [
                                                                    {
                                                                        component: 'Button',
                                                                        props: {
                                                                            size: 'sm',
                                                                            icon: 'TbUserPlus'
                                                                        }
                                                                    },
                                                                    {
                                                                        component: 'Button',
                                                                        props: {
                                                                            size: 'sm',
                                                                            icon: 'TbSettings'
                                                                        }
                                                                    },
                                                                    {
                                                                        component: 'Button',
                                                                        props: {
                                                                            size: 'sm',
                                                                            icon: 'TbPlus',
                                                                            content: 'New Board'
                                                                        }
                                                                    }
                                                                ]
                                                            },

                                                        },
                                                    },

                                                ]
                                            }

                                        },
                                    },
                                    {
                                        component: 'PanelItemSeparator',
                                    },
                                    {
                                        component: 'PanelItem',
                                        props: {
                                            inner: {
                                                withCard: true,
                                                title: 'File Manager',
                                                extra: [
                                                    {
                                                        component: 'Segment',
                                                        props: {
                                                           items: [
                                                               {
                                                                   value: 'grid',
                                                                   icon: 'TbLayoutGrid'
                                                               },
                                                               {
                                                                   value: 'list',
                                                                   icon: 'TbList'
                                                               }
                                                           ]
                                                        }
                                                    }
                                                ]
                                            },
                                        },
                                    },
                                    {
                                        component: 'PanelItemSeparator',
                                    },
                                    {
                                        component: 'PanelItem',
                                        props: {
                                            inner: {
                                                withCard: true,
                                            },
                                        },
                                    },
                                ]
                            },
                        },
                    },
                },
            ],
        },
    },
}

export const ActionButton = (props: any) => {
    return (
            <Button
                size={props.size || 'sm'}
                icon={props?.icon}
            >
                {props.content || null}
            </Button>
    )
}

export const ActionSegment = (props: any) => {
    return (
        <Center>
            <Segment>
                <For each={props.items}>
                    {(item: any, index: any) => {
                        return (
                            <Segment.Item
                                key={index}
                                value={props.size || 'sm'}
                            >
                                { item.icon || null}
                                {item.content || null}
                            </Segment.Item>
                        )
                    }}
                </For>
            </Segment>
        </Center>
    )
}

export const Panels = (props: any) => {
    // const currentCatalog: any = usePlaygroundActorSelector(currentCatalogSelector);

    return (
        <ResizablePanelGroup direction={props.direction}>
            <PanelsList>
                <For each={props.items}>
                    {(item: any, index: any) => {
                        return (
                            <>
                                item.component === 'PanelItem' && (
                                <PanelItem key={index} panelId={item?.id} />
                                ) item.component === 'PanelItemSeparator' && (
                                <PanelItemSeparator
                                    key={index}
                                    disabled={item?.disabled}
                                    hidden={item?.hidden}
                                />
                                )
                            </>
                        )
                    }}
                </For>
            </PanelsList>
        </ResizablePanelGroup>
    )
}
export const PanelsList = ({ children }: any) => {
    return <>{children}</>
}
export const PanelItemSeparator = ({ disabled, hidden }: any) => {
    return (
        <ResizableHandle
            disabled={disabled || false}
            className={hidden ? 'hidden' : ''}
        />
    )
}
export const PanelItem = ({ panelId }: any) => {
    return (
        <>
            <ResizablePanel>
                <Card className="h-full" />
            </ResizablePanel>
        </>
    )
}

const Page = () => {
    return (
        <ResizablePanelGroup direction="vertical">
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
                            bodyClass="h-full"
                        />
                    </ResizablePanel>
                    <ResizableHandle  />
                    <ResizablePanel>
                        <ResizablePanelGroup direction="vertical">
                            <ResizablePanel>
                                <Card
                                    header={{
                                        content: 'Sprint 2',
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
                                    bodyClass="h-full"
                                />
                            </ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel>
                                <Card
                                    header={{
                                        content: 'File Manager',
                                        extra: (
                                            <HStack>
                                                <Center>
                                                    <Segment>
                                                        <Segment.Item
                                                            value="grid"
                                                            className="text-xl px-3"
                                                        >
                                                            <TbLayoutGrid />
                                                        </Segment.Item>
                                                        <Segment.Item
                                                            value="list"
                                                            className="text-xl px-3"
                                                        >
                                                            <TbList />
                                                        </Segment.Item>
                                                    </Segment>
                                                </Center>
                                            </HStack>
                                        ),
                                        bordered: false,
                                    }}
                                    className="h-full"
                                    bodyClass="h-full"
                                />
                            </ResizablePanel>
                            <ResizableHandle withHandle />
                            {/*style={{ minHeight: '220px' }}*/}
                            <ResizablePanel className="">
                                <Card className="h-full " bodyClass="h-full ">
                                    <Stack
                                        gap={'4'}
                                        h="full"
                                        justify={'space-between'}
                                    >
                                        <div className="flex flex-1 gap-4 mb-4">
                                            <div className="flex-1">
                                                <div className="heading-text text-base font-semibold">
                                                    Prompt
                                                </div>
                                                <textarea
                                                    className="w-full  resize-none mt-1 placeholder:text-gray-400 bg-transparent focus:outline-hidden heading-text"
                                                    placeholder="Decribe the image you want to generate"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col lg:flex-row gap-6 justify-between">
                                            <div className="inline-flex flex-wrap gap-2">
                                                <Tooltip title="Add image">
                                                    <Upload
                                                        showList={false}
                                                        uploadLimit={1}
                                                    >
                                                        <Button
                                                            size="sm"
                                                            icon={<LuImage />}
                                                        />
                                                    </Upload>
                                                </Tooltip>

                                                <Button
                                                    size="sm"
                                                    className="py-1"
                                                >
                                                    <div className="flex gap-2 items-center">
                                                        <span className="text-xl">
                                                            <TbRectangle />
                                                        </span>
                                                        Lanscape (4:3)
                                                    </div>
                                                </Button>

                                                <Button
                                                    size="sm"
                                                    className="py-1"
                                                >
                                                    <div className="flex gap-2 items-center">
                                                        <span className="text-xl">
                                                            <TbBan />
                                                        </span>
                                                        No style
                                                    </div>
                                                </Button>

                                                <Button
                                                    size="sm"
                                                    className="py-1"
                                                >
                                                    <div className="flex gap-2 items-center">
                                                        <span className="text-xl">
                                                            <TbBan />
                                                        </span>
                                                        No tone
                                                    </div>
                                                </Button>

                                                <Button
                                                    size="sm"
                                                    className="py-1"
                                                >
                                                    <div className="flex gap-2 items-center">
                                                        <span className="text-xl">
                                                            <TbBan />
                                                        </span>
                                                        No lighting
                                                    </div>
                                                </Button>

                                                <Button
                                                    size="sm"
                                                    className="py-1"
                                                >
                                                    <div className="flex gap-2 items-center">
                                                        <span className="text-xl">
                                                            <TbBan />
                                                        </span>
                                                        No camera
                                                    </div>
                                                </Button>
                                            </div>
                                            <div className="flex flex-col sm:flex-row sm:justify-end gap-4">
                                                <Button
                                                    size="sm"
                                                    shape="circle"
                                                >
                                                    Clear
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="solid"
                                                    shape="circle"
                                                >
                                                    Generate
                                                </Button>
                                            </div>
                                        </div>
                                    </Stack>
                                </Card>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}
export default Page

/*


 <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={25}>
                <Card className="h-full" bodyClass="h-full">
                    Sidebar
                </Card>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={75}>
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={25}>
                        <Card className="h-full" bodyClass="h-full">
                            Sidebar
                        </Card>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={75}>
                        <Card className="h-full" bodyClass="h-full">
                            Content
                        </Card>
                    </ResizablePanel>
                    <ResizableHandle  disabled />
                    <ResizablePanel style={{ minHeight: '220px'}}>
                        <Card
                            className="h-full"
                            bodyClass="h-full"
                        >
                            <Stack gap={'4'} h={'100%'} >
                                <div className="rounded-lg flex-1  p-4 border-2 border-gray-100 dark:border-gray-700 h-100">
                                    <div className="flex gap-4 mb-4">
                                        <div className="flex-1">
                                            <div className="heading-text text-base font-semibold">
                                                Prompt
                                            </div>
                                            <textarea
                                                className="w-full  resize-none mt-1 placeholder:text-gray-400 bg-transparent focus:outline-hidden heading-text"
                                                placeholder="Decribe the image you want to generate"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-6 justify-between">
                                    <div className="inline-flex flex-wrap gap-2">
                                        <Tooltip title="Add image">
                                            <Upload
                                                showList={false}
                                                uploadLimit={1}
                                            >
                                                <Button
                                                    size="sm"
                                                    icon={<LuImage />}
                                                />
                                            </Upload>
                                        </Tooltip>

                                        <Button size="sm" className="py-1">
                                            <div className="flex gap-2 items-center">
                                                <span className="text-xl">
                                                    <TbRectangle />
                                                </span>
                                                Lanscape (4:3)
                                            </div>
                                        </Button>

                                        <Button size="sm" className="py-1">
                                            <div className="flex gap-2 items-center">
                                                <span className="text-xl">
                                                    <TbBan />
                                                </span>
                                                No style
                                            </div>
                                        </Button>

                                        <Button size="sm" className="py-1">
                                            <div className="flex gap-2 items-center">
                                                <span className="text-xl">
                                                    <TbBan />
                                                </span>
                                                No tone
                                            </div>
                                        </Button>

                                        <Button size="sm" className="py-1">
                                            <div className="flex gap-2 items-center">
                                                <span className="text-xl">
                                                    <TbBan />
                                                </span>
                                                No lighting
                                            </div>
                                        </Button>

                                        <Button size="sm" className="py-1">
                                            <div className="flex gap-2 items-center">
                                                <span className="text-xl">
                                                    <TbBan />
                                                </span>
                                                No camera
                                            </div>
                                        </Button>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-end gap-4">
                                        <Button size="sm" shape="circle">
                                            Clear
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="solid"
                                            shape="circle"
                                        >
                                            Generate
                                        </Button>
                                    </div>
                                </div>
                            </Stack>

                        </Card>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
 */
