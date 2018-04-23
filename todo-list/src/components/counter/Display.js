import React from 'react';

export default function CounterDisplay(props) {
    const { counter } = props;  

    return (
        <div>
            { counter }
        </div>    
    );
}