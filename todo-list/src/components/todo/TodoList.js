import React from 'react';

export default function TodoList(props) {
    const { todoEntries, title } = props;
   
    function createTasks(item) {
        return <li key={item.key}>{item.text}</li>
    }

    let listItems = todoEntries.map(createTasks);

    return (
        <div className="todo-list">
            <h2>{title}</h2>
            <ul className="list">
                {listItems}
            </ul>
        </div>       
    );
}
