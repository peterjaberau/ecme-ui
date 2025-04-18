import { Fragment } from 'react'
import Segment from '@/components/ui/Segment'
import { TbChevronRight, TbLayoutGrid, TbList } from 'react-icons/tb'
import useFlows from '@/views/concepts/workflows/Workflow/hooks/useFlows'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-aria-components'

type FlowManagerHeaderProps = {
    onCreateClick: () => void
}

const FlowManagerHeader = ({
                               onCreateClick,
}: FlowManagerHeaderProps) => {

    const navigate = useNavigate();

    const { addFlow } =
        useFlows();

    const handleAddNewFlow = async () => {
        const newFlow: any = await addFlow();
        navigate(`/editor/${newFlow.id}`);
    };




    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
                <div className="flex items-center gap-2">
                    <h3 className="flex items-center gap-2 text-base sm:text-2xl">
                        <span
                            className="hover:text-primary cursor-pointer"
                            role="button"
                        >
                            Flow Manager
                        </span>


                    </h3>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Button onClick={handleAddNewFlow} className="text-sm sm:text-base">
                    Create Flow
                </Button>
            </div>
        </div>
    )
}

export default FlowManagerHeader
