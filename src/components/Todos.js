import React, { Component } from 'react'

const Todos = ({todos, deleteTodo}) => {
    const toDolist = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{ todo.content }</span>
                </div>
            )
        })
    ) : (
        <p className="center">No Data</p>
    )
    return (
        <div className="todos collection">
            {toDolist}
        </div>
    )
}

export default Todos