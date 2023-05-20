import { useRecoilState } from "recoil";

import { newEditState, toDosState, newTodoState, newDateState } from "./atoms";

import Calendar from "react-calendar";
import moment from 'moment'
import { useNavigate } from "react-router-dom";

export function Edit() {
  const navigate = useNavigate();

  const [newEdit, setNewEdit] = useRecoilState(newEditState);
  const [toDos, setToDos] = useRecoilState(toDosState);
  const [newTodo, setNewToDo] = useRecoilState(newTodoState);
  const [newDate, setNewDate] = useRecoilState(newDateState)

  const onFormSubmit = (event) => {
    event.preventDefault();
    setToDos(toDos.map((todo) =>
      todo.id === newTodo.id ? {id: todo.id, title: newEdit, date: newDate.toLocaleDateString(), completed: todo.completed} : todo
    ))
    setNewToDo("");
    setNewEdit("");
    setNewDate("");
    navigate("/");
  };

  const onInputChange = (event) => {
    setNewEdit(event.target.value);
    console.log(newEdit)
  };

  return (
    <>
      <h1>Edit Task</h1>
      <Calendar onChange={setNewDate} value={moment().format("LL")} />
      <br></br>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Edit task here"
          value={newEdit}
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
        <button type="submit">
          Done
        </button>
      </form>
    </>
  );
}
