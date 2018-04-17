import React, { Component } from 'react';
import './style.css';

export default class TodoList extends Component {
  render() {
    return (
      <div className="todo-list">
          <div className="header">
            <form>
              <input placeholder="enter task" />
              <button type="submit">add</button>
            </form>
          </div>
        </div>
    );
  }
}
