import { useRecoilState } from "recoil";

import { newEditState, toDosState, newTodoState, newDateState } from "./atoms";

import Calendar from "react-calendar";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export function Edit() {
  const navigate = useNavigate();

  const [newEdit, setNewEdit] = useRecoilState(newEditState);
  const [toDos, setToDos] = useRecoilState(toDosState);
  const [newTodo, setNewToDo] = useRecoilState(newTodoState);
  const [newDate, setNewDate] = useRecoilState(newDateState);

  const onFormSubmit = (event) => {
    if (newTodo.date === newDate) {
      event.preventDefault();
      setToDos(
        toDos.map((todo) =>
          todo.id === newTodo.id
            ? {
                id: todo.id,
                title: newEdit,
                date: newDate,
                completed: todo.completed,
              }
            : todo
        )
      );
    } else {
      event.preventDefault();
      setToDos(
        toDos.map((todo) =>
          todo.id === newTodo.id
            ? {
                id: todo.id,
                title: newEdit,
                date: newDate.toLocaleDateString(),
                completed: todo.completed,
              }
            : todo
        )
      );
    }
    setNewToDo("");
    setNewEdit("");
    setNewDate("");
    navigate("/");
  };

  const onInputChange = (event) => {
    setNewEdit(event.target.value);
    console.log(newEdit);
  };

  return (
    <>
      <h1 className="px-2">Edit Task</h1>
      <Calendar
        className="px-2"
        onChange={setNewDate}
        value={moment().format("LL")}
      />
      <br></br>
      <form className="px-2 py-1" onSubmit={onFormSubmit}>
        Task:
        <input
          className="px-2 py-2 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
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
        <button
          className="text-stone-500 border border-stone-500 hover:bg-stone-500 hover:text-white active:bg-stone-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Done
        </button>
      </form>
    </>
  );
}
