import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import { newTodoState, newDateState, toDosState } from "./atoms";

import Calendar from "react-calendar";
import moment from "moment";
import { v4 as uuidV4 } from "uuid";

export function Add() {
  const navigate = useNavigate();

  // implemented recoil state
  const [newTodo, setNewTodo] = useRecoilState(newTodoState);
  const [newDate, setNewDate] = useRecoilState(newDateState);
  const [toDos, setToDos] = useRecoilState(toDosState);

  const onFormSubmit = (event) => {
    if (newDate === "") {
      event.preventDefault();
      setToDos([
        ...toDos,
        {
          id: uuidV4(),
          title: newTodo,
          date: moment().format("DD/MM/YYYY"),
          // date: moment().format("YYYY-MM-DD"),
          completed: false,
        },
      ]);
    } else {
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
    }
    setNewDate("");
    setNewTodo("");
    setNewDate("");
    navigate("/");
  };

  const onInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <>
      <h1 className="px-2">Add Task</h1>
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
