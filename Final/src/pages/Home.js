import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { newEditState, newTodoState, toDosState } from "./atoms";

import moment from "moment";

export function Home() {
  const navigate = useNavigate();

  const [toDos, setToDos] = useRecoilState(toDosState);
  const [newEdit, setNewEdit] = useRecoilState(newEditState);
  const [newTodo, setNewToDo] = useRecoilState(newTodoState);

  const handleDelete = ({id}) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  }

  const handleComplete = (todo) => {
    setToDos(
      toDos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }

  const handleEdit = ({id}) => {
    const findTodo = toDos.find((todo) => todo.id === id);
    setNewEdit(findTodo.title);
    setNewToDo(findTodo);
    navigate("/edit")
  }

  return (
    <div>
      <h1 className="text-base font-semibold leading-6 text-gray-900">
        Todo List
      </h1>
      <p className="mt-2 text-sm text-gray-700">
        A todo list with full functionality.
      </p>
      <button onClick={() => navigate("/add")}> Add a new task </button>
      <h2>Pending Tasks</h2>
      <br></br>
      <ul>
        {toDos.map((todo) => (
          <li key={todo.id}>
          <p className={`list ${todo.completed ? "complete" : ""}`}>{todo.title}</p><p className={`${moment(moment(moment((todo.date).split(' ')[0].split("/").reverse().join("-"))).format('YYYY-MM-DD')).isSame(moment().format('YYYY-MM-DD')) ? "dateurgent" :moment(moment(moment((todo.date).split(' ')[0].split("/").reverse().join("-"))).format('YYYY-MM-DD')).isBefore(moment().format('YYYY-MM-DD')) ? "datepast": "datefuture"}`}>Due: {todo.date}</p>
          <button onClick={() => handleComplete(todo)}>completed</button>
          <button onClick={() => handleEdit(todo)}>edit</button>
          <button onClick={() => handleDelete(todo)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
