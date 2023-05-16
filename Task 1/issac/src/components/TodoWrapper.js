// TodoWrapper -> parent component

import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import { Todo} from './Todo';
import { EditTodoForm } from './EditTodoForm';

uuidv4();

export const TodoWrapper = () => {
    const [todos,setTodos] = useState([])

    const addTodo = todo =>{
        setTodos([...todos, {id: uuidv4(), task:todo,
        completed:false, isEditing: false}]);
        console.log(todos);
    };
    // delete entire task functionality
    const deleteTodo = id =>{
        setTodos(todos.filter(todo =>todo.id !==id))
    }

    // edit exisiting task functionality
    const editTodo = id => {
        setTodos(todos.map(todo =>todo.id === id ? {...todo,
        isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task,id) =>{
        setTodos(todos.map(todo => todo.id ===id ?{...todo,
        task, isEditing: !todo.isEditing} : todo))
    }

    // div needed, Must only have 1 parent element
    // props are here

    //If editing is true -> Display edittodo form
    return(
        <div className='TodoWrapper'>
            <h1> Tasks to Finish!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index)=> (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} 
                    task={todo} />
                ) : (
                    <Todo task={todo} key={index} deleteTodo = {deleteTodo}
                editTodo= {editTodo} />
                )

             ))};

        </div>
    )
}