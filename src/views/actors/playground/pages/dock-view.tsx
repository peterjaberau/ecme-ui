import DockView from '../components/dock-view'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '../components/ui/resizable'
import Card from '@/components/ui/Card'
import Container from '@/components/shared/Container'
import Tooltip from '@/components/ui/Tooltip'
import Upload from '@/components/ui/Upload'
import Button from '@/components/ui/Button'
import { LuImage } from 'react-icons/lu'
import { Stack } from '@chakra-ui/react'
import {
    aspectRatioOptions,
    cameraOptions,
    lightingOptions,
    styleOptions,
    toneOptions,
} from '@/views/actors/playground/helpers/utils'
import { type ReactNode, useMemo } from 'react'
import Dropdown from '../../../../components/ui/Dropdown'
import Avatar from '../../../../components/ui/Avatar'
import { TbBan, TbRectangle } from 'react-icons/tb'
import Code from '../components/renders/code'
import Solutions from '../components/renders/solutions'
import Submissions from '../components/renders/submissions'
import Testcase from '../components/renders/test-case'
import TestResult from '../components/renders/test-result'
import  Description from '../components/renders/description'



const Page = () => {
    return (
        <DockView
            Description={<Description/>}
            Solutions={<Solutions/>}
            Submissions={<Submissions/>}
            Code={<Code/>}
            Testcase={<Testcase/>}
            TestResult={<TestResult/>}
        />
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
