import { useWorkflowStore } from '../store/workflowStore'
import cloneDeep from 'lodash/cloneDeep'

const useWorkflowAction = () => {
    // const { mailList, setMail, setMailList, setSelectedMail } = useMailStore()

    const { workflowList, setWorkflow, setWorkflowList, setSelectedWorkflow }: any = useWorkflowStore()

    const updateWorkflowList = (newWorkflow: any) => {
        const newWorkflowList = cloneDeep(workflowList).map((workflow: any) => {
            if (workflow.id === newWorkflow.id) {
                workflow = newWorkflow
            }
            return workflow
        })
        setWorkflowList(newWorkflowList)
    }




    const onWorkflowDelete = (workflowsId: string[]) => {
        setWorkflowList(workflowList.filter((workflow: any) => !workflowsId.includes(workflow.id)))
        setSelectedWorkflow([])
    }

    const onResetChecked = () => {
        setWorkflowList(
            workflowList.map((workflow: any) => {
                return workflow
            }),
        )
        setWorkflowList([])
    }

    return {
        onResetChecked,
    }
}

export default useWorkflowAction
