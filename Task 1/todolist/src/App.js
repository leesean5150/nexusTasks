// Exported Components are rendered here
// Each State managed by specifc hook (Keep track of user Input)

import React, { useState } from "react";
import Header from "./Pages/components/Header";
import Form from "./Pages/components/Form";
import Todolist from "./Pages/components/Todolist";
import "./App.css";
import Input from "./Pages/components/globalState"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

// (Keep track of user Input,todo items and edit states)
const App = () => {
  // Using Recoil
  //const input= useRecoilValue(Input)
 // const setInput = useSetRecoilState(Input);

  // Using Hook
  const [input, setInput] = useState("");         // Inital Value -> Empty String
  const [todos, setTodos] = useState([]);         // Inital Value -> Empty Array
  const [editTodo, setEditTodo] = useState(null); // Inital Value -> Null
  const [date, setDate] = useState();

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          {/* input,todos => current state setInput,SeTodos =>Function of how state gets updated
           passed as argument in Form Component (Form.js)*/}
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        {/* States of todo list items */}
        <Todolist
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          date={date}
          setDate={setDate}
        />
      </div>
    </div>
  );
};

export default App;
