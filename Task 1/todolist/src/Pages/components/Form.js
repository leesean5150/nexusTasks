// Component responsible for creating list 

//useEffect -> Executes when change happens to 2nd parameter 
import React, { useEffect } from "react";
import moment from 'moment'

// Unique ID for array
import { v4 as uuidV4 } from "uuid";

// remove all instances of input & setInput

// States declared from App.js
const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed, date) => {

    // if ids match seTodos state is updated, else keep exisitng todo object
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed, date } : todo
    );
    setTodos(newTodo);
    // set Empty string after updating task
    setEditTodo("");
  };

  // First time code runs normally
  // Subsequently -> code only runs if  [setInput, editTodo] changes
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    // Prevent page from being reloaded
    event.preventDefault();

    // if not editodo -> copy + append todos object and clear input
    //Otherwise calls to updateTodo function
    if (!editTodo) {
      setTodos([...todos, { id: uuidV4(), title: input, completed: false, date: moment().format('Do MMMM YYYY')}]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed, editTodo.date);
    }
  };

  // Gets passed to App.js

  // input State passed into value attribute
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Please enter a task..."
        className="task-input"
        value={input}
        onChange={onInputChange}

        {...{/* Does not allow empty string */}}
        required
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
