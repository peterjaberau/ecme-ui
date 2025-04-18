import { useState, useEffect } from "react";
import { apiGetGroups, apiUpdateGroup, apiAddGroup, apiDeleteGroup } from "../services/groupService";

const useGroups = () => {

  // State for holding the groups array
  const [groups, setGroups] = useState([]);

  // State for tracking the loading and error status - used for api
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    const fetchGroups = async () => {
      try {
        const storageGroups = await apiGetGroups();
        setGroups(storageGroups)
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  const addGroup = async (name: any) => {

    const newGroup = {name: name, color: "gray"}

    try {
      const groupAdded = await apiAddGroup(newGroup);
      setGroups((prev: any): any => {
        const updatedGroups = [...prev, groupAdded] ;
        return updatedGroups;
      })
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }

  }

  const changeColor = async (groupId: any, color: any) => {
    const groupData = { color: color};
    try {
      await apiUpdateGroup(groupId, groupData);
      setGroups((prev: any): any => {
        const updatedGroups = prev.map((group: any) => {
          if(group.id === groupId) {
            return {...group, color: color}
          }
          return group
        })

        return updatedGroups
      });
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  const deleteGroup = async (groupId: any) => {
    try {
      await apiDeleteGroup(groupId);
      setGroups(prev => {
        const updatedGroups = prev.filter((group: any) => group.id !== groupId)
        return updatedGroups
      })
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return {groups, addGroup, changeColor, deleteGroup, loading, error}
}

export default useGroups;
