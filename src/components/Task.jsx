import './style.css'

const Task = ({ task, onDelete }) => {
  return (
    <div className='task' >
        <h2 >{task.title}</h2>
        <p>{task.body}</p> 
        <button onClick={onDelete}>Delete Task</button>     
    </div>
  )
}

export default Task
