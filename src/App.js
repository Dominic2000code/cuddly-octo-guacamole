import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState();
  // console.log(todos);

  const getTodos = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api");
    setTodos(res.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1> {todo.title} </h1>
          <span>{todo.body}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
