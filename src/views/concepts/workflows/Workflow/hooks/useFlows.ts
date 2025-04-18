import { useState, useEffect } from "react";
import { apiAddFlow, apiDeleteFlow, apiGetFlows, apiUpdateFlow } from "../services/flowService";

const useFlows = () => {

  // State for holding the flows array
  const [flows, setFlows] = useState([]);

  // State for tracking the loading and error status - used for api
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    const fetchPlans = async () => {
      try {
        const storageFlows = await apiGetFlows()
        setFlows(storageFlows)
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const addFlow = async () => {

    const number = flows.length + 1
    const newFlow = { name: `Flow ${number}`, nodes: [], edges: [], group: null}
    try {
      const flowAdded = await apiAddFlow(newFlow);
      return {id: flowAdded.id}
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }

  }

  const deleteFlow = async (flowId: any) => {
    try {
      await apiDeleteFlow(flowId);
      setFlows(prev => {
        const updatedFlows = prev.filter((flow: any) => flow.id !== flowId)
        return updatedFlows
      })
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  const updateFlow = (flowId: any, data: any) => {
    setLoading(true);
    try {
      const flowData = {
        ...data,
        updatedAt: Date.now()
      }
      apiUpdateFlow(flowId, flowData);
      setFlows((prev: any) => {
        const updatedFlows = prev.map((flow: any) => {
          if(flow.id === flowId) {
            return {...flow, ...data}
          }
          return flow
        })
        return updatedFlows
      })
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  const clearGroupInFlows = (groupId: any) => {
    setFlows((prev: any) => {
      const updatedFlows = prev.map((flow: any) => {
        if(flow.group === groupId) {
          return {...flow, group: null}
        }
        return flow
      })
      return updatedFlows
    })
    // TODO clear all flows that contains this group
  }


  return {flows, addFlow, deleteFlow, updateFlow, clearGroupInFlows, loading, error}
}

export default useFlows;
