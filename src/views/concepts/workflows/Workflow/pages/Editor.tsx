import Toolbox from '../components/editor/Toolbox'
import Nav from '../components/editor/Nav'
import FlowEditor from '../components/editor/FlowEditor'
import GridControls from '../components/editor/GridControls'
import ViewportControls from '../components/editor/ViewportControls'
import KeyboardShortcuts from '../components/editor/KeyboardShortcuts'
import { ReactFlowProvider } from '@xyflow/react'
import { DDProvider } from '../context/DragDropContext'
import { useParams } from 'react-router-dom'
import { Toaster } from 'sonner'
import useFlow from '../hooks/useFlow'

const Editor: any = () => {

  const { flowId } = useParams();

  const { flow, loading, addNode, updateNode, updateEdge, updateDataEdge, changeName, nodes, edges, onNodesChange, onEdgesChange, onConnect} = useFlow(flowId);

  if(loading || flow === null) return;

  // if(!loading && !flow) return <ErrorPage/>;

  return (
    <div>
      <div className='h-screen relative bg-gray-50 select-none'>
        <Toaster />

        <ReactFlowProvider>
          <Nav flow={flow} changeName={changeName}/>

          <DDProvider>
            <Toolbox addNode={addNode} updateNode={updateNode} updateEdge={updateEdge} updateDataEdge={updateDataEdge}/>
            <FlowEditor nodes={nodes} addNode={addNode} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} />
          </DDProvider>

          <GridControls />
          <ViewportControls />
        </ReactFlowProvider>

        <KeyboardShortcuts/>
      </div>
    </div>
  )
}

export default Editor
