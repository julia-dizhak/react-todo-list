import React from 'react';

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
                { listItems }
            </ul>
        </div>       
    );
}
