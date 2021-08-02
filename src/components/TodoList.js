import React, { useEffect, useState, useRef } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo}) => {

    const todoListRef = useRef()
    const [listStyle, setListStyle] = useState({paddingRight: 0})

    useEffect(() => {
        if(todoListRef.current.scrollHeight > todoListRef.current.clientHeight){
            setListStyle({paddingRight: 10+"px"})
        } else {
            setListStyle({paddingRight: 0})
        }
    }, [todos])

    const showTodos = () => {
        if(todos) {
            let newArr = todos.map(todo => {
                return <Todo todo={todo} key={todo.name + "_"+ todo.id} toggleTodo={toggleTodo}/>
            }) 
            return newArr
        }
    }

    return (
        <div className="todo-list" style={listStyle} ref={todoListRef}>
            {showTodos()}
        </div>
    )
}

export default TodoList
