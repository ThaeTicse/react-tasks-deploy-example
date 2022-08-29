import {createContext, useEffect, useState} from 'react'
import {dataTasks} from '../data/dataTasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([])

  function createTask(task){
    setTasks([...tasks,{
      title: task.title,
      id: tasks.length,
      description: task.description}])
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  useEffect(()=>{
    setTasks(dataTasks)
  },[])

  return (
    <TaskContext.Provider value={{
      tasks: tasks,
      deleteTask: deleteTask,
      createTask: createTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}
