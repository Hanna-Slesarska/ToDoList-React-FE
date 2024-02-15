import { useEffect, useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import { getAllTasks, addTask, editTask, deleteTask } from './FetchTasks';


function App() {
  const [myTask, setTask] = useState([]);
  const [title, setTitle] = useState('')
  const [editing, setEditing] = useState(false)
  const [taskId, setTaskId] = useState('')
  
  
  
  useEffect(()=> {
    getAllTasks(setTask)
  }, [])

  const updateInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setTaskId(_id)
  }
  const toggleCompleted = (_id) => {
    setTask(myTask.map(task => {
      if (task._id === _id) {
      return {...task, completed: !task.completed,};
      } else {
      return task;
      } 
      }));
  }
  return(
    <div>
        <h1>My ToDo List</h1>
        <div className='container'>
          <input
          type="text"  
          placeholder="Add a Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

          <button 
          disabled={!title}
          onClick=
          {editing ? () => editTask(taskId, title, setTask, setTitle,  setEditing) : 
          () => addTask(title, setTitle, setTask)}>
          {editing ? "Edit" : "Add"}
          </button>
          
        </div>
        
        {myTask.map((task) => <ToDoList text={task.title} key={task._id} 
        updateInput={() => updateInput(task._id, task.title )}
        deleteTask={() => deleteTask(task._id, setTask)}
        toggleCompleted={toggleCompleted} />
        )}
      </div>
  )
}
export default App;