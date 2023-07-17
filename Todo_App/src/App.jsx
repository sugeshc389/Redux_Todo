import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, editTodo } from "./Actions/action";
import { useState } from "react";

function App() {
  const [counter, setCouter] = useState(0);
  const [todo, setTodo] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [updatedText, setUpdatedText] = useState("");
  const [edit, setEdit] = useState(false);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const todoSubmitHandler = () => {
    if (todo !== "") {
      dispatch(addTodo(counter, todo));
      setCouter(counter + 1);
      setTodo("");
    }
  };

  const handleEditTodo = (todoId) => {
    setEditingTodoId(todoId);
    const todoItem = todos.find((todo) => todo.id === todoId);
    setUpdatedText(todoItem.task);
    setEdit(true);
  };

  const handleSaveEditTodo = (todoId) => {
    dispatch(editTodo(todoId, updatedText));
    setEditingTodoId(null);
    setUpdatedText("");
  };

  return (
    <>
      <h1>Todos</h1>
      <div className="todo">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <button onClick={todoSubmitHandler}>Add todo</button>

      <div className="todos">
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>
              {editingTodoId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                  <button onClick={() => handleSaveEditTodo(todo.id)}>Save</button>
                </>
              ) : (
                <>
                  {!edit ? <p>{todo.task}</p> : <p>{todo.text}</p>}
                  <button onClick={() => dispatch(removeTodo(todo.id))}>
                    Remove
                  </button>
                  <button onClick={() => handleEditTodo(todo.id)}>
                    Edit
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
