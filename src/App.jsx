import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodoStatus } from "./redux/slices/todosSlice";
import { toast } from "react-toastify";

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState("");

  const getTodosDone = () => {
    return todos.filter((todo) => {
      return todo.isDone;
    });
  };

  const handleDelete = (idx) => {
    dispatch(deleteTodo(idx));
    toast.success("delete todo success")

  };

  const handleisDone = (index, value) => {
    dispatch(updateTodoStatus({ index, isDone: value }));
    toast.success("update todo success")

  };

  const handleAddTodo = () => {
    if (!newTodo) {
      return toast.error("must input");
    }

    dispatch(addTodo({ title: newTodo, isDone: false }));
    setNewTodo("");
    toast.success("create new todo success")
  };

  return (
    <div className="bg-slate-800 h-screen">
      <div className="container mx-auto text-white max-w-[800px]">
        <h1 className="text-center text-3xl font-bold">Chores ToDo List</h1>

        <table className="w-full">
          {todos.map((todo, index) => {
            return (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={(e) => handleisDone(index, e.target.checked)}
                  />
                </td>
                <td>
                  <p className={todo.isDone ? "line-through" : ""}>
                    {todo.title}
                  </p>
                </td>
                <td>
                  <button onClick={() => handleDelete(index)}>delete</button>
                </td>
              </tr>
            );
          })}
        </table>

        <h1 className="text-center text-3xl font-bold">
          Done : {getTodosDone().length}
        </h1>

        <div>
          <input
            type="text"
            className="w-full text-black"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            className="bg-slate-400 p-2 rounded-2xl"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
