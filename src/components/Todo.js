import React, { useRef, useState } from 'react'

const Todo = ({ todo,  toggleTodo }) => {

    const checkRef = useRef()
    const [nameStyle, setNameStyle] = useState({textDecoration: "none"})

    const handleCheck = () => {
        if(checkRef.current.checked) {
            setNameStyle({textDecoration: "line-through"})
        }
        else {
            setNameStyle({textDecoration: "none"})
        }

        toggleTodo(todo.id)
    }

    return (
        <div className="todo">
            <input className="todo__check" type="checkbox"checked={todo.complete} onChange={handleCheck} ref={checkRef} />
            <p className="todo__name" style={nameStyle}>{todo.name}</p>
        </div>
    )
}

export default Todo
