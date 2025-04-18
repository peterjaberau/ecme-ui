import FlowList from '../components/FlowList'
import useFlows from '../hooks/useFlows'
import useGroups from '../hooks/useGroups'
import { Button } from 'react-aria-components'
import { useNavigate } from 'react-router-dom'
import FlowHeaderManager from '../components/FlowManagerHeader'

const Workspace = () => {
    const navigate = useNavigate()

    const { addFlow, clearGroupInFlows, flows, deleteFlow, updateFlow } =
        useFlows()
    const { groups, addGroup, changeColor, deleteGroup } = useGroups()
    const handleAddNewFlow = async () => {
        // const newFlow = await addFlow();
        // navigate(`/editor/${newFlow.id}`);
        //   const newFlow: any = await addFlow();
    }

    const handleOpenFlow = (id: string) => {
        navigate(`/editor/${id}`)
    }

    return (
        <>
            <FlowHeaderManager onCreateClick={handleAddNewFlow} />
            <div className="mt-6">
                <FlowList
                    flowList={flows}
                    onDelete={deleteFlow}
                    onOpen={handleOpenFlow}
                    onClick={updateFlow}
                />
            </div>
        </>
    )
}

export default Workspace
