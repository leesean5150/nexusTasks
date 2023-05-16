import React, {useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

// All the props are passed here
export const Todo = ({task, deleteTodo,editTodo}) => {

    const [first,setFirst] = useState(true);

    const handleChange = (data)=>{
        console.log(data)
        
    }
    return(
        <div className='Todo'>
            <input type="checkbox" value={first} onChange={()=>handleChange('first')} /> 
            <p> {task.task}</p>

            {/* Icons*/}
            <div>
                {/* OnClick events -> Modify/Delete Function when icon clicked*/}
                <FontAwesomeIcon icon={faPenToSquare}  onClick={()=>editTodo(task.id)}/>
                <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)} />
            </div>
        </div>
    );
}
// Now display the to-do's we have added