import { useState, useEffect } from "react"

import "./assets/css/App.css"
import BottomBar from "./components/BottomBar"
import Header from "./components/Header"

import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const setNewId = () => {
    let id = getId()
    id = id+1
    localStorage.setItem("id", JSON.stringify(id))
  }

  const getId = () => {
    return JSON.parse(localStorage.getItem("id")) || 0
  }

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
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <BottomBar setTodos={setTodos} getId={getId} setNewId={setNewId}/>
    </div>
  );
}

export default App;