import React, { Component } from 'react';
import TodoItems from './TodoItems';
//import { store } from './../../index';

// action type
const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';
//const LOGIN_MODAL_TOGGLE = 'LOGIN_MODAL_TOGGLE';
const FILTER_SET = 'FILTER_SET ';

// reducer (reducers)
const initialState = [];
// const initialState = {
//   currentUser: null,
//   todos: [],
//   filer: 'SHOW_ALL'
// }

export function todoReducer(state = initialState, action) { 
  switch(action.type) {
    case TODO_ADD : {
      return applyAddTodo(state, action);
    }
    case TODO_TOGGLE : {
      return applyToggleTodo(state, action)
    }
    default : return state; 
  }
}

function applyAddTodo(state, action) {
  //const todo = Object.assign({}, action.todo, { completed: false });
  //return state.concat(todo);
  return state.concat(action.todo);
}
// function applyAddTodo(state, action) {
//   const todo = Object.assign({}, action.todo, { completed: false });
//   const todos = state.todos.concat(todo);
//   return Object.assign({}, state, { todos });
// }

function applyToggleTodo(state, action) { 
  return state.map(todo =>
    todo.id === action.todo.id
    ? Object.assign({}, todo, { completed: !todo.completed })
    : todo
  ); 
}
// function applyToggleTodo(state, action) {
//   const todos = state.map(todo => 
//      todo.id === action.todo.id 
//      ? Object.assign({}, todo, { completed: !todo.completed})
//      : todo
//   );

//   return Object.assign({}, state, { todos });
// }

function filterReducer(state = 'SHOW_ALL', action) { 
  switch(action.type) {
    case FILTER_SET : {
      return applySetFilter(state, action);
    }
    default : return state; 
  }
}

function applySetFilter(state, action) {
  return action.filter;
}

// action creators
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

// function doToggleLoginModal(open) { 
//   return {
//     type: 'LOGIN_MODAL_TOGGLE',
//     isLoginModalOpen: open,
//   };
// }


// component
export default class TodoList extends Component {
  state = {
    items: []
  }

  addItem = (event) => {
    let itemArray = this.state.items;

    itemArray.push({
      text: this._inputElement.value,
      key: Date.now()
    });

    this.setState({ items: itemArray });

    this._inputElement.value = '';

    event.preventDefault();
  }

  render() {
    return (
      <div className="todo-list">
          <div>
            <h1>Todo List</h1>
            <form 
                className="todo-form" 
                onSubmit={this.addItem}>

              <input 
                  ref={(a) => this._inputElement = a}
                  placeholder="enter task" />

              <button type="submit">add</button>
            </form>
          </div>

          <TodoItems                  
              entries={this.state.items} />
        </div>
    );
  }
}
