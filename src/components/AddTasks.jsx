import { useState } from 'react';
import './style.css';


const AddTasks = () => {

    const [posts, setPosts] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const addNewPost = {title: "new"}
        
        console.log('click')
        setPosts({...posts, addNewPost})
        setTitle('')
        setBody('')
    }

  return (
    <form className='formData'>
        <div className='title'>
            <label>Add Title</label>
            <input 
                type="text" 
                placeholder="Add a Title"
                value={title}
                onChange={handleTitleChange}
            />
        </div>
        <div className='postBody'>
            <label>Post's Body</label>
            <textarea 
                type="text"
                value={body}
                onChange={handleBodyChange}
            />
        </div> 
        <button onClick={handleSubmit}>Add Post</button>     
    </form>
  )
}

export default AddTasks
