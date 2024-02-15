import axios from 'axios';

const myURL = "https://todo-list-p3lw.onrender.com"

const getAllTasks = (setTask) => {
    axios.get(`${myURL}`)
    .then(({data}) => {console.log(data)
        setTask(data)
    })
}
const addTask = (title, setTitle, setTask) => {
    axios.post(`${myURL}/saveTask`, { title })
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllTasks(setTask);
    })
}
const editTask = (taskId, title, setTask, setTitle,  setEditing) => {
    axios.post(`${myURL}/editTask`, {_id: taskId, title})
    .then((data) => {
        console.log(data);
        setTitle("");
        setEditing(false);
        getAllTasks(setTask);
    })
}
const deleteTask = (_id, setTask) => {
    axios.post(`${myURL}/deleteTask`, {_id})
    .then((data) => {
        console.log(data);
        getAllTasks(setTask);
    })
}
 export { getAllTasks, addTask, editTask, deleteTask };