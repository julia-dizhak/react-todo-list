import React from 'react';

export default function TodoItems(props) {
    const { entries } = props;
    let todoEntries = entries;

    function createTasks(item) {
        return <li key={item.key}>{item.text}</li>
    }

    let listItems = todoEntries.map(createTasks);

    return (
        <ul className="todo">
            { listItems }
        </ul>
    );
}


