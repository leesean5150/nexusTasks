// Need to import React. Needed when JSX converted in JS object
import React,{useState} from 'react'

// useState -> used to keep track of what user is typing
// TodoForm is a component

export const TodoForm = ({addTodo}) => {
    // function that captures value of state when submit form 
    const [value, setValue] = useState('')

    // Prevents page from reloading 
    const handleSubmit = e => {
        e.preventDefault();

        // sent value to parent component because other components need to access this
        // to pass value from TodoForm -> Todo Wrapper (Use props)
        addTodo(value)

        // When user enter -> Form will have empty string again
        setValue("")
    }



    // Creating a form for user to input tasks
    // onChange attribute -> event raised when text altered
    return(
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value= {value}
            placeholder='What task needs to be done today?'
            onChange={(e) => setValue(e.target.value)}/>

            <button type='submit' className='todo-btn'>Add Task</button>
            </form>
    );
}