import { useMemo, useState } from 'react'
import FlowSegment from './FlowSegment'

type FlowsListProps = {
    flowList: any[]
    onDelete: (id: string) => void
    onOpen: (id: string) => void
    onClick: (id: string, data: any) => void
    [key: string]: any
}


const FileList = (props: FlowsListProps) => {
    const [layout, setLayout] = useState('grid')
    const {
        flowList,
        onDelete,
        onClick,
        onOpen,
    } = props

    const flowItems = useMemo(() => {
        return flowList
    }, [flowList])



    const renderFlowSegment = (list: any) => (
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-4 gap-4 lg:gap-6">
            {list.map((flow: any) => (
                <FlowSegment
                    key={flow.id}
                    fileType={flow.fileType}
                    size={flow.nodes.length || 0}
                    name={flow.name}
                    onClick={() => console.log('onClick', flow.id)}
                />
            ))}
        </div>
    )


    return (
        <div>
            {flowItems.length > 0 && (
                <div>
                    <h4>Flows</h4>
                    {layout === 'grid' && renderFlowSegment(flowItems)}
                </div>
            )}

        </div>
    )
}

export default FileList
