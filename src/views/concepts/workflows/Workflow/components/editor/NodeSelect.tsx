import React, { useEffect, useState } from 'react'
import nodesTypes from '../nodes'
import { BiSearch } from 'react-icons/bi'
// import RenderCatalogItem from '../nodes/ui/RenderCatalogItem'
import { useDragDrop } from '../../context/DragDropContext'
// import * as SegmentedControl from '@/packages/ui/components/segmented-control';



const NodeSelect = ({handleAddElement}) => {

  // State for filtered nodes based on search input
  const [filteredNodes, setFilteredNodes] = useState([]);

  // State for the search filter input
  const [filterValue, setFilterValue] = useState("");

  // State for tracking the selected node group
  const [nodeGroupSelected, setNodeGroupSelected] = useState('ui');

  // Filter nodes based on the search input
  useEffect(() => {
    if(filterValue) {
      const filtereNodes = Object.keys(nodesTypes).filter(node => node.includes(filterValue));
      setFilteredNodes(filtereNodes);
      setNodeGroupSelected('');
    } else {
      setFilteredNodes([]);
      setNodeGroupSelected('ui');
    }
  }, [filterValue])

   // Filter nodes by selected node group
  useEffect(() => {
    if(!filterValue) {
      // If no search filter nodes by the selected group
      const filtereNodes = Object.keys(nodesTypes).filter(node => nodesTypes[node].group === nodeGroupSelected)
      setFilteredNodes(filtereNodes)
    }

  }, [nodeGroupSelected])

  return (
    <div className='bg-white w-[400px] rounded-lg mt-0 ml-2 border p-4 h-full overflow-hidden flex flex-col gap-3 '>

     {/* Search input field */}
     <div className='relative pl-8 border rounded-md p-px py-1'>
        <div className='absolute top-0 bottom-0 left-2 flex items-center'>
          <BiSearch className='text-gray-500'/>
        </div>
        <input className='w-full outline-none text-sm placeholder:text-gray-500' placeholder='Search' type='text' value={filterValue} onChange={(e) => setFilterValue(e.target.value)}/>
      </div>

      {/* Button group for selecting node types (wireframe, shape, social) */}
      {/*<SegmentedControl.Root defaultValue="ui" value={nodeGroupSelected} onValueChange={(value) => setNodeGroupSelected(value)}>*/}
      {/*  <SegmentedControl.List>*/}
      {/*      <SegmentedControl.Trigger value="ui">Ui</SegmentedControl.Trigger>*/}
      {/*      <SegmentedControl.Trigger value="wireframe">Wireframe</SegmentedControl.Trigger>*/}
      {/*      <SegmentedControl.Trigger value="shape">Shape</SegmentedControl.Trigger>*/}
      {/*      <SegmentedControl.Trigger value="social">Social</SegmentedControl.Trigger>*/}
      {/*  </SegmentedControl.List>*/}
      {/*</SegmentedControl.Root>*/}


        {/* Button group for selecting node types (wireframe, shape, social) */}
        <div className="bg-gray-100 p-0.5 flex gap-px rounded-md items-stretch h-7 flex-none">
            {['wireframe', 'shape', 'social'].map((item) => (
                <button key={item} onClick={() => setNodeGroupSelected(item)} className={`rounded text-xs font-semibold flex-auto hover:bg-white ${nodeGroupSelected === item ? 'bg-white' : 'text-gray-500'}`}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
            ))}
        </div>

      {/* Warning message for social nodes */}
      {nodeGroupSelected === 'social' && <>
        <div className='text-xs border p-1 px-2 rounded bg-gray-50'>
        All brand icons and logos are the property of their respective owners.
        </div>
      </>}

      {/* Info text */}
      <div className='text-xs  text-gray-500'>
          Tap on a node or drag and drop it to add to the flow
      </div>

      {/* List of filtered nodes */}
      <div className='overflow-y-scroll'>
        <div className=''>
          {filteredNodes.length > 0 ?
            <NodeList nodes={filteredNodes} onAddElement={handleAddElement} nodeGroupSelected={nodeGroupSelected} />
            :
            <div className='flex flex-col items-center justify-center text-sm h-40 col-span-2'>
              <div className='font-medium'>No nodes found</div>
              <small className='text-gray-500'>Try searching for a different node name</small>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

// NodeList component renders the list of nodes in a specific group
const NodeList = ({nodes, nodeGroupSelected,  onAddElement}) => {

  // Use drag-and-drop
  const {setType} = useDragDrop()

  // Handle drag start event, storing the type of node being dragged
  const handleOnDragStart = (e, nodeType) => {
    setType(nodeType);
    e.dataTransfer.effectAllowed = 'move';
  }

  // Group nodes by their subgroup
  const groupedBySubgroup = nodes.reduce((acc, element) => {
    const subgroup = nodesTypes[element]?.subgroup || 'miscellaneous';  // If subgroup undefined add to 'miscellaneous' group
    if (!acc[subgroup]) {
      acc[subgroup] = [];
    }
    acc[subgroup].push(element);
    return acc;
  }, {});

  return (
    <>
    {/* Render each subgroup of nodes */}
    {Object.entries(groupedBySubgroup).map(([key, nodes]) => {
      return(
        <div key={key}>
          {/* Show subgroup name only for 'wireframe' group */}
          {nodeGroupSelected === 'wireframe' &&
            <div className='text-xs font-semibold mb-2 border-b pb-2 capitalize'>
              {key}
            </div>
          }
          {/* Render node for each node in the subgroup */}
          <div className='grid grid-cols-2 gap-2 justify-items-stretch mb-2'>
            {
              nodes.map((element, i) => {
                const node = nodesTypes[element];
                return (
                  <button key={i}
                    className='bg-gray-50 p-4 pb-2 flex flex-col items-center relative rounded  hover:bg-gray-100 overflow-hidden group'
                    onClick={() => onAddElement(element)}
                    onDragStart={(e) => handleOnDragStart(e, element)}
                    draggable
                    >
                      <div className={' ' + (node.group !== "social" && 'scale-90')}>
                          {node.group !== 'ui'
                              ? React.createElement(node.component, {
                                  key: element,
                                  data: {color: "gray", preview: true}
                              })
                              : <RenderCatalogItem label={node.label}/>}
                      </div>
                      <div
                          className='font-semibold text-xs capitalize my-1 group-hover:text-blue-700'>{node.label}</div>
                  </button>
                )
              })
            }
          </div>
        </div>
      )
    })}
    </>
  )

}

export default NodeSelect;
