import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => {

    const showTodos = () => {
        if(todos) {
            let newArr = todos.map(todo => {
                return <Todo todo={todo} key={todo.name + "_"+ todo.id} toggleTodo={toggleTodo}/>
            }) 
            return newArr
        }

        
    }

    return (
        <div className="todo-list">
            {
                showTodos()
            }
        </div>
    )
}

export default TodoList
