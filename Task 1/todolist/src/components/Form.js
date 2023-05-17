import React, { useEffect } from "react";
import moment from 'moment'
import { v4 as uuidV4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed, date) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed, date } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

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
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidV4(), title: input, completed: false, date: moment().format('Do MMMM YYYY')}]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed, editTodo.date);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Please enter a task..."
        className="task-input"
        value={input}
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
