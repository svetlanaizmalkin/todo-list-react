import React, { useRef, useState, useEffect } from 'react'

const Todo = ({ todo,  toggleTodo }) => {

    const checkRef = useRef()
    const [nameStyle, setNameStyle] = useState({textDecoration: "none"})

    useEffect(() => {
        setStyles()
    }, [])

    const setStyles = () => {
        if(checkRef.current.checked) 
            setNameStyle({textDecoration: "line-through"})
        else 
            setNameStyle({textDecoration: "none"})
    }

    const handleCheck = () => {
        setStyles()
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
