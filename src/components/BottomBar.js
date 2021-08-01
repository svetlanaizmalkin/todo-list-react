import React, { useRef } from 'react'

const BottomBar = ({ setTodos, getId, setNewId }) => {

    const inputRef = useRef()
    
    const handleAddTodo = () => {
        const name = inputRef.current.value.trim();
        if(name === "") return
        setNewId()
        setTodos(prev => [...prev, {id: getId(), name: name, complete: false}])
        inputRef.current.value = null
    }

    return (
        <div className="bottom-bar">
            <input  className="bottom-bar__input" 
                    type="text" 
                    placeholder="Type your todo here" 
                    ref={inputRef} 
                    onKeyUp={(e) => {
                        if(e.key === 'Enter'){
                            handleAddTodo()
                        }
                    }}/>
            <button className="bottom-bar__btn" onClick={() => {handleAddTodo()}}>
                <span className="add-line"></span>
                <span className="add-line"></span>
            </button>
        </div>
    )
}

export default BottomBar
