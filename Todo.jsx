import React from 'react';

const Todo = (props) => {

    return(
        <>
        <div className="list">
        <i className="fa fa-trash" aria-hidden="true" onClick={() => {
            props.onSelect(props.id)
        }}></i>
        <li>{props.text}</li>
        </div>
        </>
    )
}

export default Todo;