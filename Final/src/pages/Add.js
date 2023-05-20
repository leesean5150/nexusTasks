import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import { newTodoState, newDateState, toDosState } from "./atoms";

import Calendar from "react-calendar";
import moment from "moment";
import { v4 as uuidV4 } from "uuid";

export function Add() {
  const navigate = useNavigate();

  const [newTodo, setNewTodo] = useRecoilState(newTodoState);
  const [newDate, setNewDate] = useRecoilState(newDateState);
  const [toDos, setToDos] = useRecoilState(toDosState);
  const date = ''

  const onFormSubmit = (event) => {
    event.preventDefault();
    setToDos([
      ...toDos,
      {
        id: uuidV4(),
        title: newTodo,
        date: newDate.toLocaleDateString(),
        completed: false,
      },
    ]);
    setNewDate("")
    setNewTodo("");
    setNewDate("");
    navigate("/");
  };

  const onInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <>
      <h1>Add Task</h1>
      <Calendar onChange={setNewDate} value={moment().format("LL")} />
      <br></br>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Add task here"
          value={newTodo}
          onChange={onInputChange}
          {
            ...{
              /* Does not allow empty string */
            }
          }
          required
        />
        <br></br>
        <br></br>
        <button type="submit">Done</button>
      </form>
    </>
  );
}
