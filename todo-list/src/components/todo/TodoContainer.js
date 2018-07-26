import React, { Component } from 'react';
import './../../style.css';

import TodoList from './TodoList';
import MenuButton from './../menu/MenuButton';
import Menu from './../menu/Menu';

export const TODO_ADD = 'TODO_ADD';
export const TODO_TOGGLE = 'TODO_TOOGLE';
// {
//     type: 'TODO_ADD',
//     todo: { id: '0', name: 'learn redux', completed: false }
// }
//
// {
//     type: 'TODO_TOGGLE',
//     todo: { id: '0' }
// }

// actions creators
function applyAddTodo(state, action) {
    const todo = Object.assign(
        {}, 
        action.todo, 
        { completed: false }
    ); 
    return state.concat(todo);
}

function applyToggleTodo(state, action) {
    return state.map(todo =>
        todo.id === action.todo.id
        ? Object.assign(
            {}, 
            todo, 
            { completed: !todo.completed })
        : todo
    ); 
}

const initialState = [];

// define a reducer
export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case TODO_ADD: {
            return applyAddTodo(state, action);
        }
        case TODO_TOGGLE: {
            return applyToggleTodo(state, action);
        }
        default: 
            return state;
    }
}

export default class TodoContainer extends Component {
  state = {
    visible: false
  }

  handleMouseDown = (event) => {
    this.setState({ visible: !this.state.visible })
    event.stopPropagation();
  }

  render() {
    return (
        <React.Fragment>
            <MenuButton handleMouseDown={this.handleMouseDown} />
            <Menu 
                visibleState={this.state.visible}
                handleMouseDown={this.handleMouseDown} 
            />
            <TodoList />
        </React.Fragment>
    );
  }
}
