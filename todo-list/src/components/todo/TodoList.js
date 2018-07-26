import React, { Component } from 'react';
import TodoItems from './TodoItems';

// action type
//const TODO_ADD = 'TODO_ADD';
//const TODO_TOGGLE = 'TODO_TOGGLE';
//const LOGIN_MODAL_TOGGLE = 'LOGIN_MODAL_TOGGLE';
//const FILTER_SET = 'FILTER_SET ';

// const initialState = {
//   currentUser: null,
//   todos: [],
//   filer: 'SHOW_ALL'
// }

// function filterReducer(state = 'SHOW_ALL', action) { 
//   switch(action.type) {
//     case FILTER_SET : {
//       return applySetFilter(state, action);
//     }
//     default : return state; 
//   }
// }

// function applySetFilter(state, action) {
//   return action.filter;
// }

// action creators
// export function doAddTodo(id, name) {
//   return {
//     type: TODO_ADD,
//     todo: { id, name }
//   };
// }

// export function doToggleTodo(id) {
//   return {
//     type: TODO_TOGGLE,
//     todo: { id }
//   };
// }

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
                    placeholder="enter task" 
                />
                
                <button type="submit">add</button>
            </form>
        </div>

        <TodoItems                  
            entries={this.state.items} 
        />
        </div>
    );
  }
}
