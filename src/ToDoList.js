import React from 'react'
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";



const ToDoList = ({text, updateInput, deleteTask, toggleCompleted }) => {
    const handleChange = () => {
        toggleCompleted(text.id);
       
    }
  return (
    <div className='tasks'>
      <div className='left'>
        <div className='checkbox'>
            <input 
            className='check'
            type="checkbox"
            checked={text.completed}
            onChange={handleChange} />
        </div>
        

        <p>{text}</p>
      </div>
      
      <div className='icons'>
        <CiEdit onClick={updateInput} className='icon edit'/>
        <AiOutlineDelete onClick={deleteTask} className='icon del'/>
      </div>
      
    </div>
  )
}

export default ToDoList;
