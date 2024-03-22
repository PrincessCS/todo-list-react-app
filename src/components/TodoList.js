import React from 'react'
import {MdDeleteSweep} from 'react-icons/md'


const TodoList = ({task, deleteTask, toggleCheck} ) => {
    return (
        
    <li className='list'>
        <div className='list-items'>
            <input type='checkbox' checked={task.checked} onChange={()=> toggleCheck(task.taskName)}/>
            <p className={task.checked ? 'isChecked' : ''}>{task.taskName}</p>
            <MdDeleteSweep className='delete-icon' onClick={ () => deleteTask (task.taskName)}/>
        </div>
       
    </li>
    );
};

export default TodoList;