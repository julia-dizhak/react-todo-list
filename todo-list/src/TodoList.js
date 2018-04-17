import React, { Component } from 'react';
import './style.css';

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
    event.preventDefault;
  }

  render() {
    return (
      <div className="todo-list">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input 
                  ref={(a) => this._inputElement = a}
                  placeholder="enter task" />
              <button type="submit">add</button>
            </form>
          </div>
        </div>
    );
  }
}
