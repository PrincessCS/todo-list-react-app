
import React, { useState } from 'react';


const TodoForm = ({addTask}) => {
 
    const [task, setTask] = useState('')


    function handleInputValue (event){
        setTask(event.target.value)
    }

    function handleAddTask(event){
        event.preventDefault();
        if (task.trim === '') return;
        addTask (task);
        setTask('');
    }


    return(
        <form className="todo-form"   onSubmit={handleAddTask}>
            <input className="todo-input"
            type="text"
            placeholder="Add Task"
            value={task}
            onChange={handleInputValue}
            name="text"
            />

            <button className='todo-btn'>Add</button>

        </form>
    )
}

export default TodoForm;


