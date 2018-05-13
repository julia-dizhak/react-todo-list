import React from 'react';

export default function MenuButton(props) {
    const { handleMouseDown } = props;
    
    return (
        <button 
            className="menu-button"
            onMouseDown={handleMouseDown}>
        </button>
    );
}
