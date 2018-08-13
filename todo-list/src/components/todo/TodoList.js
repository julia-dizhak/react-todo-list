import React from 'react';
import FlipMove from "react-flip-move";

export default function TodoList(props) {
    const {todoEntries, title, handleDeleteTodo} = props;
   
    function createTasks(item) {
        return (
            <li 
                key={item.key}
                onClick={() => handleDeleteTodo(item.key)}>
                {item.text}
            </li>
        )
    }

    const todos = todoEntries.map(createTasks);

    return (
        <div className="todo-list">
            <h2>{title}</h2>
            <ul className="list">
                <FlipMove duration={250} easing="ease-out">
                    {todos}
                </FlipMove>
            </ul>
        </div>       
    );
}
