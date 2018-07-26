import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import filter from 'lodash/filter';

const initialState = {
    users: [
        {
            name: 'Julia'
        }
    ],
    message: 'initial message'
}

// define a reducer
export const usersReducer = function(state = initialState, action) {
    if (state === undefined) {
        state = [];
    }

    switch(action.type) {
        case 'UPDATE_MESSAGE': 
            const newState = Object.assign({}, state, {
                message: action.message
            })
            return newState.message;

        case 'USER_LIST_SUCCESS':
          return Object.assign({}, state, {users: action.users});

        case 'ADD_USER':
            return state.concat(action.color);

        case 'DELETE_USER':
            // use lodash to create a new user array without the user we want to remove
            const newUsers = filter(state.users, user => user.id !== action.userId)
            return Object.assign({}, state, {users: newUsers});    
        
        default:
            return state;    
    }        
}

// actions
const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS',
    ADD_USER = 'ADD_USER',
    DELETE_USER = 'DELETE_USER',
    UPDATE_MESSAGE = 'UPDATE_MESSAGE';

// action creators
export function updateMessage() {
    return {
        type: UPDATE_MESSAGE,
        message: 'hey test'
    }
}

export function addUser(user) {
    return {
      type: ADD_USER
    };
}

export function getUsersSuccess(users) {
    return {
      type: USER_LIST_SUCCESS,
      users
    };
}
  
export function deleteUserSuccess(userId) {
    return {
      type: DELETE_USER,
      userId
    };
}

export class UsersList extends Component {
    componentDidMount(state) {
        axios.get('https://jsonplaceholder.typicode.com/users')
           .then(response => {
              state.dispatch(getUsersSuccess(response.data));
            });
    }
    
    render() {
        let { users, message } = this.props; 
        if (users === undefined) {
            users = [];
        }
        users = users || [];
        console.log(users);

        return (
            <div className="users-list">
                <h1>Users</h1>
                {message}
                <ul>
                    {users.map((user, index) =>
                         <li key={index}>{user.name}</li>
                     )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
      users: state.usersState.users
    };
}
// const mapStateToProps = state => ({
//     users: state.usersState
// });

//dispatch an action (update message after 5 seconds)
// setTimeout( () => {
//   store.dispatch(updateMessage())
// }, 5000);
  
export default connect(mapStateToProps)(UsersList);
