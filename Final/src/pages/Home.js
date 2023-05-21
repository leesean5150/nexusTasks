import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { newDateState, newEditState, newTodoState, toDosState } from "./atoms";

import moment from "moment";

export function Home() {
  const navigate = useNavigate();

  const [toDos, setToDos] = useRecoilState(toDosState);
  const [newEdit, setNewEdit] = useRecoilState(newEditState);
  const [newTodo, setNewToDo] = useRecoilState(newTodoState);
  const [newDate, setNewDate] = useRecoilState(newDateState);

  const handleDelete = ({ id }) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (todo) => {
    setToDos(
      toDos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = (todo) => {
    const findTodo = toDos.find((task) => task.id === todo.id);
    setNewEdit(findTodo.title);
    console.log(newEdit);
    setNewToDo(findTodo);
    console.log(newTodo);
    setNewDate(todo.date);
    console.log(newDate);
    navigate("/edit");
  };

  return (
    <div className="py-2 px-2">
      <h1 className="text-3xl px-1 py-3 font-semibold leading-6 text-gray-900">
        Todo List
      </h1>
      <p className="mt-2 text-sm px-1 py-1 text-gray-700">
        A todo list with full functionality.
      </p>
      <br></br>

      <button
        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => navigate("/add")}
      >
        {" "}
        Add a new task{" "}
      </button>

      <div className="px-1 mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-center sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-400">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="flex py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-gray-900 sm:pl-0"
                  >
                    Task
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                  >
                    Due
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900"
                  >
                    Options
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-400">
                {toDos.map((todo) => (
                  <tr key={todo.id}>
                    <td className={`list ${todo.completed ? "complete" : ""}`}>
                      {todo.title}
                    </td>
                    <td
                      className={`${
                        moment(
                          moment(
                            moment(
                              todo.date
                                .split(" ")[0]
                                .split("/")
                                .reverse()
                                .join("-")
                            )
                          ).format("YYYY-MM-DD")
                        ).isSame(moment().format("YYYY-MM-DD"))
                          ? "dateurgent"
                          : moment(
                              moment(
                                moment(
                                  todo.date
                                    .split(" ")[0]
                                    .split("/")
                                    .reverse()
                                    .join("-")
                                )
                              ).format("YYYY-MM-DD")
                            ).isBefore(moment().format("YYYY-MM-DD"))
                          ? "datepast"
                          : "datefuture"
                      }`}
                    >
                      {todo.date}
                    </td>
                    <td>
                      <button
                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-2 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={() => handleComplete(todo)}
                      >
                        complete
                      </button>
                      <button
                        className="bg-yellow-500 text-white active:bg-yellow-600 font-bold uppercase text-xs px-2 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={() => handleEdit(todo)}
                      >
                        edit
                      </button>
                      <button
                        className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-2 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={() => handleDelete(todo)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
