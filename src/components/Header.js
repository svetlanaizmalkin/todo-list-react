import React from 'react'

const Header = ({ setTodos, deleteCheckedTodos }) => {

    return (
        <header className="header">
            <h1 className="header__h1">To do:</h1>
            <button className="header__btn" onClick={deleteCheckedTodos}>Clear checked</button>
        </header>
    )
}

export default Header
