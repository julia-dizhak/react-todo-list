import React, { Component } from 'react';

import TodoList from './TodoList';
const API_URL = 'https://documents-de4ba.firebaseio.com/todos.json';


export default class TodoListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            messageEmptyTodoDisplay: false,
            disabled: false
        }

        //this.saveTodo = this.saveTodo.bind(this);

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    }

    componentDidMount() {
       fetch(API_URL).then(async (response) => {
            console.log(response);
            response.json().then( async data => {
                console.log(data);
                this.setState({ todos: data })
            })
        });
    }

    handleAddTodo(event) {
        if ( this.inputElement.value !== '') {
            let newItem = {
                text: this.inputElement.value,
                key: Date.now()
            }

            this.setState((prevState) => {
                return {
                    todos: prevState.todos.concat(newItem),
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

    handleDeleteTodo(key) {
        const filteredTodos = this.state.todos.filter(function(item) {
            return (item.key !== key)
        });
        this.setState({todos: filteredTodos});
    }

    render() {
        const { messageEmptyTodoDisplay, disabled } = this.state;

        return (
            <div className="todo-container">
                <div className="todo-form-container">
                    <form 
                        className="todo-form" 
                        onSubmit={this.handleAddTodo}>
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
                    todoEntries={this.state.todos} 
                    handleDeleteTodo={this.handleDeleteTodo}
                />
            </div>
        );
    }
}
