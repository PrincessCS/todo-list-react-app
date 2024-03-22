import React, {useState} from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'

function App() {

  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = {taskName, checked: false};

    setToDoList ([...toDoList, newTask]);
  };

  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter(task=> task.taskName
      !== deleteTaskName))
  }

  function toggleCheck(taskName){
    setToDoList((prevToDoList) => 
    prevToDoList.map ((task) => task.taskName === taskName ? {...task, checked:
    !task.checked} : task),
    );
  }

  return (
    <>

    <div className='container'>
      <h1 className='header'>ToDo List</h1>
      <TodoForm addTask = {addTask} />

    <div className='todo-list'>
      
      <ul className='list'>
        {toDoList.map((task, key) => 
        (
          <TodoList task= {task} key = {key} deleteTask={deleteTask} toggleCheck={toggleCheck}/>
        ))}
      </ul>

     
    </div>
    </div>
    </>
)}




export default App;

