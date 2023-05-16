// Need to import React. Needed when JSX converted in JS object
import React,{useState} from 'react'

// useState -> used to keep track of what user is typing
// EditTodoForm is a component

export const EditTodoForm = ({editTodo, task}) => {
    // function that captures value of state when submit form 
    const [value, setValue] = useState(task.task)

    // Prevents page from reloading 
    const handleSubmit = e => {
        e.preventDefault();

        // take value and id
        editTodo(value, task.id)

        // When user enter -> Form will have empty string again
        setValue("")
    }



    // Creating a form for user to input tasks
    // onChange attribute -> event raised when text altered
    return(
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value= {value}
            placeholder='Update Task'
            onChange={(e) => setValue(e.target.value)}/>

            <button type='submit' className='todo-btn'>Update Task</button>
            </form>
    );
}