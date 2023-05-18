// Component to display todo list items

import React from "react";
import moment from 'moment';
//import Calendar from 'react-calendar';

// Everything encapsulate by component (Check if editTodo needed inside argument)
// Inital editTodo  Don't need to add 
const Todolist = ({ todos, setTodos, setEditTodo, date, setDate }) => {

  // Keeps tasks that don't match id      need {} oustide id
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //  If id match, strike item as complete and return item
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        // Return updated Object
        return item;
      })
    );
  };

  // Edit exisiting task via matching id
  const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  // // Click on the Date Calander
  // const handleDate = (todo) => {
  //   null;
  // };

  return (
          
    <div>
      {/* Maps to todolist item inside list */}
      {/* values found in Form.js */}
      {todos.map((todo) => (
        <li className="list-item" key={todo}>
          <input
            type="text"
            value={todo.title}

            {...{/*Strike off task */}}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange
            {...(event) => event.preventDefault()}
          />
          <p className="date">Due:{todo.date}</p>


            {/* Strike Task Complete Button*/}
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle" />
            </button>

            {/* Modify Date Buttton*/}
            <button className="button-date task-button">
              {/* <input type="date" onChange={(e) => setDate(e.target.value)} className="fa fa-calendar"/> */}
              {/* <Calendar onChange={onChange} value={value} /> */}
              <i className="fa fa-calendar" />
            </button>

            {/* Edit Task Button */}
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit" />
            </button>

            {/* Delete Button */}
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash" />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};
export default Todolist;
