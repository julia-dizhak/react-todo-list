import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const initialUserState = {
    users: []
}

// USER_LIST_SUCCESS
// USER_LIST_FAILED

// reducer
export let usersReducer = function(state = initialUserState, action) {
    if (state === undefined) {
        state = []
    }

    switch(action.type) {
        case 'USER_LIST_SUCCESS':
          return Object.assign({}, state, { users: action.users });

        case 'ADD_USER':
            return state.concat(action.color);
        
        default:
            return state;    
    }        
}

// store.dispatch({
//     type: 'ADD_USER',
//     user: { name: 'Julia' }
// });
// console.log(store, store.getState()); 

export class UsersList extends Component {
    componentDidMount() {
        axios.get('/path/to/user-api').then(response => {
          //this.setState({users: response.data});

        //   store.dispath({
        //       type: 'USER_LIST_SUCCESS',
        //       users: response.data
        //   })

        });
    }

    // deleteUser: function(userId) {
    //     store.dispatch(...);
    // }
    
    render() {
        let { users } = this.props; 

        return (
            <div className="users-list">
                <h2>Users</h2>

                {/* <UserList users={this.props.users} deleteUser={this.deleteUser} /> */}

                {/* <ul>
                    {users.map( (user, index) =>
                         <li key={index}>{ user }</li>
                     )}
                </ul> */}
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
    mapStateToProps,
    //mapDispatchToProps
)(UsersList);
