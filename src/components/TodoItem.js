import React from "react";

const TodoItem = ({item, onDelete}) => {
    return (<li
        key='5'
        className="list-group-item d-flex justify-content-between align-items-center">
        <span>{item.description}</span>
        <button className="btn btn-danger" onClick={() => {onDelete(item.id)}}>
            Delete
        </button>
    </li>)
}

export default TodoItem