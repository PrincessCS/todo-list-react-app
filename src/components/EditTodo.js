

import React,{useState} from 'react'


export const EditTodo= ({editTodo, task}) => {

    const[value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue('');

    }
    return (
        <form className='todo--form' onSubmit={handleSubmit}>
            <input type='text' className='update--input' value = {value} placeholder='Update Task' onChange={(e) => setValue (e.target.value)}/>
            <button type='submit' className='update--btn'>Update Task</button>

        </form>
    )
}