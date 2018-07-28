import React from 'react';
import FlipMove from "react-flip-move";

export default function TodoList(props) {
    const { todoEntries, title, handleDeleteItem } = props;
   
    function createTasks(item) {
        return (
            <li 
                key={item.key}
                onClick={() => handleDeleteItem(item.key)}
            >
                {item.text}
            </li>
        )
    }

    const listItems = todoEntries.map(createTasks);

    return (
        <div className="todo-list">
            <h2>{ title }</h2>
            <ul className="list">
                <FlipMove duration={250} easing="ease-out">
                    { listItems }
                </FlipMove>
            </ul>
        </div>       
    );
}
