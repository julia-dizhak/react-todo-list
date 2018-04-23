import React from 'react';

export default function Button(props) {
    const { label, increment } = props;  

    return (
        <React.Fragment>
            <label>{ label }: </label>
            <button 
                onClick={props.handleClick.bind(null, increment)}>
                +{ increment }
            </button>
        </React.Fragment>
    );
  
}
