
import { useState } from 'react'


function TaskForm({createTask}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  

  const handleSubmit=(e)=>{
    e.preventDefault()
    createTask({
      title,
      description
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder='Escribe tu tarea'
        onChange={(e)=> setTitle(e.target.value)} />
      <textarea 
        placeholder='Escribe la descripcion de la tarea'
        onChange={(e)=> setDescription(e.target.value)}/> 
      <button>Save</button>
    </form>
  )
}

export default TaskForm