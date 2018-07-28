import React, { Component } from 'react';

import TodoList from './TodoList';

export default class TodoListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            messageEmptyTodoDisplay: false,
            disabled: false
        }

        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }
    
    handleAddItem(event) {
        if ( this.inputElement.value !== '') {
            let newItem = {
                text: this.inputElement.value,
                key: Date.now()
            }

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem),
                    messageEmptyTodoDisplay: false,
                    //disabled: false
                }
            });

            this.inputElement.value = '';
        } else {
            this.setState({
                messageEmptyTodoDisplay: true,
                //disabled: true
            });
        }
    
        event.preventDefault();
    }

    handleDeleteItem(key) {
        const filteredItems = this.state.items.filter(function(item) {
            return (item.key !== key)
        });
        this.setState({items: filteredItems});
    }

    render() {
        const { messageEmptyTodoDisplay, disabled } = this.state;

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

                        <button 
                            type="submit"
                            disabled={disabled}
                        >
                            add todo
                        </button>
                        {messageEmptyTodoDisplay && <div className="error">Please provide a todo description</div>}
                    </form>
                </div>

                <TodoList  
                    title={'Todo list'}                
                    todoEntries={this.state.items} 
                    handleDeleteItem={this.handleDeleteItem}
                />
            </div>
        );
    }
}
