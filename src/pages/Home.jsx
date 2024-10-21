import { useState } from 'react';
import Navbar from '../components/Navbar';
import Tasks from '../components/Tasks';
import './styles.css'
import AddTasks from '../components/AddTasks';

const Home = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1, 
            title: "First Post",
            body: "This is the body of the first post"
        },
        {
            id: 2, 
            title: "Second Post",
            body: "This is the body of the second post"
        }
    ])
  return (
    <div className="home">
        <Navbar /> 
        <AddTasks />
        <Tasks tasks={tasks}/>         
    </div>
  )
}

export default Home;
