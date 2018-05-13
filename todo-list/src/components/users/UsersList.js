import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import filter from 'lodash/filter';
import store from './../../index';

// actions
const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS',
    ADD_USER = 'ADD_USER',
    DELETE_USER = 'DELETE_USER';

// reducer
const initialUserState = {
    users: [
        {
            name: 'test 111'
        }
    ]
}

export const usersReducer = function(state = initialUserState, action) {
    if (state === undefined) {
        state = []
    }

    switch(action.type) {
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

// action creators
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
  
// store.dispatch({
//     type: 'ADD_USER',
//     user: { name: 'Julia' }
// });
// console.log(store, store.getState()); 

export class UsersList extends Component {

    componentDidMount() {
        //userApi.getUsers();
       
        axios.get('https://jsonplaceholder.typicode.com/users')
           .then(response => {
               //console.log(store);
               store.dispatch(getUsersSuccess(response.data));
               console.log(response)
               return response;
            });
             
    }

    // deleteUser: function(userId) {
    //     store.dispatch(...);
    // }
    
    render() {
        let { users } = this.props; 
        if (users === undefined) {
            users = []
        }
        users = users || []
        //console.log('Users', users);

        return (
            <div className="users-list">
                <h2>Users</h2>

                {/* <UserList users={this.props.users} deleteUser={this.deleteUser} /> */}

                <ul>
                    {users.users.map((user, index) =>
                         <li key={index}>{user.name}</li>
                     )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.usersState
});

// const mapDispatchToProps = function(dispatch, ownProps) {
//     return {
//       toggleActive: function() {
//         dispatch({ ... });
//       }
//     }
// }
  
export default connect(
    mapStateToProps
    //mapDispatchToProps
)(UsersList);
