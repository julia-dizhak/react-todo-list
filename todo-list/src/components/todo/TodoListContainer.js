import React, { Component } from 'react';

import TodoList from './TodoList';

export default class TodoListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }

        this.handleAddItem = this.handleAddItem.bind(this);
    }
    
    handleAddItem(event) {
        if ( this.inputElement.value !== '') {
            let newItem = {
                text: this.inputElement.value,
                key: Date.now()
            }

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                }
            });

            this.inputElement.value = '';
        } else {
            //debugger;
        }
    
        event.preventDefault();
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-form-container">
                    <form 
                        className="todo-form" 
                        onSubmit={this.handleAddItem}>
                        <input 
                            ref={(a) => this.inputElement = a}
                            placeholder="please enter a todo" 
                        />
                        <button type="submit">add todo</button>
                        {/* <div></div> */}
                    </form>
                </div>

                <TodoList  
                    title={'Todo list'}                
                    todoEntries={this.state.items} 
                />
            </div>
        );
    }
}
