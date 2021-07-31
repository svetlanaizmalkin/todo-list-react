import { useState } from "react"

import "./assets/css/App.css"
import BottomBar from "./components/BottomBar"
import Header from "./components/Header"

import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([{id: 1, name: "todo1", complete: false}])

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const deleteCheckedTodos = () => {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <div className="content">
      <Header setTodos={setTodos} deleteCheckedTodos={deleteCheckedTodos}/>
      <TodoList todos={todos} setTodos={setTodos} toggleTodo={toggleTodo}/>
      <BottomBar todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
