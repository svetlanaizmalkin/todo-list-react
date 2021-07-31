import React, { useRef, useEffect } from 'react'

const BottomBar = ({todos, setTodos }) => {

    const inputRef = useRef()

    const handleAddTodo = (e) => {
        const name = inputRef.current.value.trim();
        if(name === "") return
        setTodos(prev => [...prev, {id: name, name: name, complete: false}])
        inputRef.current.value = null
    }

    return (
        <div className="bottom-bar">
            <input className="bottom-bar__input" type="text" placeholder="Type your todo here" ref={inputRef}/>
            <button className="bottom-bar__btn" onClick={handleAddTodo}>
                <span className="add-line"></span>
                <span className="add-line"></span>
            </button>
        </div>
    )
}

export default BottomBar
