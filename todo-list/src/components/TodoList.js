import React, { Component } from 'react';
import TodoItems from './TodoItems';

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
