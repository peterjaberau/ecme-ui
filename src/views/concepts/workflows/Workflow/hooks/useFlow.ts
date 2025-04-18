import { useEffect, useState, useCallback } from "react";
import { useEdgesState, useNodesState, addEdge} from "@xyflow/react";
import { apiGetFlow, apiUpdateFlow } from "../services/flowService";
import { nanoid } from "nanoid";
import useDebounce from "./useDebounce";


const useFlow = (flowId: any) => {
  // State for holding the flow object
  const [flow, setFlow]: any = useState(null);

  // State and handler for managing nodes of the flow
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // State for tracking the loading and error status - used for api
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)

    const fetchFlow = async () => {
      try {
        // Fetch flow data from the API
        const flowData = await apiGetFlow(flowId);

        // If no data is returned
        if (!flowData) {
          setFlow(undefined as any);
          return;
        };

        // Update state with the fetched flow details
        setFlow({
          id: flowData.id,
          name: flowData.name,
          group: flowData.group,
          updatedAt: flowData.updatedAt
        } as any);
        setNodes(flowData.nodes);
        setEdges(flowData.edges);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFlow();
  }, [flowId]);

  const onConnect: any = useCallback(
    (params: any) => setEdges((eds: any): any => addEdge({...params, type: 'custom', animated: true, data: {color: "gray", strokeWidth: 1}}, eds)),
    [setEdges],
  );

  const addNode = (type: any, position: any, data = {}) => {
    const id = nanoid(8)
    const label = type.charAt(0).toUpperCase() + type.slice(1)
    // Default node
    const newNode = {id: id, type: type, position: {x: position.x, y:position.y}, data: {label: label, color: "gray", ...data}}
    setNodes((prev: any): any => {
      const updatedNodes: any = [...prev, newNode]
      // @ts-ignore
      updateStorage({nodes: updatedNodes})
      return updatedNodes
    })
  }

  const changeName = (updatedName: any) => {
    setFlow((prev: any) => ({...prev, name: updatedName}))
  }

  const updateNode = (nodeId: any, data: any) => {
    setNodes((prev: any) => prev.map((node: any) => {
      if(node.id === nodeId) {
        return {...node, data: {...node.data, ...data}}
      }
      return node
    }))
  }

  const updateEdge = (edgeId: any, data: any) => {
    setEdges((prev: any) => prev.map((edge: any) => {
      if(edge.id === edgeId) {
        return {...edge, ...data}
      }
      return edge
    }))
  }

  const updateDataEdge = (edgeId: any, data: any) => {
    setEdges((prev: any) => prev.map((edge: any) => {
      if(edge.id === edgeId) {
        return {...edge, data: {...edge.data, ...data}}
      }
      return edge
    }))
  }

  const updateStorage = () => {
    setLoading(true);
    try {
      const flowData = {
        name: flow.name,
        nodes: nodes,
        edges: edges,
        updatedAt: Date.now()
      }
      apiUpdateFlow(flowId, flowData)
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  // On every change update database in background every 400ms
  const debounceUpdate = useDebounce(updateStorage, 400);
  useEffect(() => {

    debounceUpdate()
  }, [nodes, edges, flow])

  return {
    flow,
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    changeName,
    onConnect,
    addNode,
    updateNode,
    updateEdge,
    updateDataEdge,
    loading,
    error
  }
}

export default useFlow;
