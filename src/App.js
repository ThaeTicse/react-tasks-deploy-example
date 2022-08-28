import TaskList from './TaskList'
import TaskForm from './TaskForm'
import './App.css';
import {dataTasks} from './dataTasks';
import {useState, useEffect } from 'react';

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(()=>{
      setTasks(dataTasks)
  },[])

  function createTask(task){
    setTasks([...tasks,{
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }
  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks}/>
    </>
  );
}

export default App;
