import React, { Component } from 'react';
import './../../style.css';

import TodoList from './TodoList';
import MenuButton from './../menu/MenuButton';
import Menu from './../menu/Menu';

export const TODO_ADD = 'TODO_ADD';
export const TODO_TOGGLE = 'TODO_TOOGLE';

// actions creators
export function doAddTodo(id, name) { 
    return {
        type: TODO_ADD,
        todo: { id, name }
    };
}
export function doToggleTodo(id) { 
    return {
        type: TODO_TOGGLE,
        todo: { id }
  };
}

export function doToggleLoginModal(open) { 
    return {
        type: 'LOGIN_MODAL_TOGGLE',
        isLoginModalOpen: open
    };
}

// define a reducer
//const initialState = [];
const initialState = { 
    currentUser: null, 
    todos: [],
    filter: 'SHOW_ALL'
};

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case TODO_ADD : {
            return applyAddTodo(state, action);
        }
        // case TODO_TOGGLE : {
        //     return applyToggleTodo(state, action);
        // }
        default : 
            return state;
    }
}

export function applyAddTodo(state, action) {
    // const todo = Object.assign({}, action.todo, { completed: false }); 
    // return state.concat(todo);

    // nested data structure
    const todo = Object.assign({}, action.todo, { completed: false});
    const todos = state.todos.concat(todo);
    return Object.assign({}, state, { todos });
}

export function applyToggleTodo(state, action) {
    // return state.map(todo =>
    //     todo.id === action.todo.id
    //     ? Object.assign(
    //         {}, 
    //         todo, 
    //         { completed: !todo.completed })
    //     : todo
    // ); 

    // nested data structure
    const todos = state.todos.map(todo =>
        todo.id === action.todo.id
        ? Object.assign({}, todo, { completed: !todo.completed })
        : todo );
    return Object.assign({}, state, { todos });
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
