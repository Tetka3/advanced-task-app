import './style.css'

const Task = ({ task }) => {
  return (
    <div className='task' >
        <h2 >{task.title}</h2>
        <p>{task.body}</p>      
    </div>
  )
}

export default Task
