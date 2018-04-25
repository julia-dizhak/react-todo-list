let userReducer = function(state, action) {
    if (state === undefined) {
        state = []
    }

    if ( action.type === 'ADD_USER') {
        let newState = state.concat([action.user]);
        return newState;
    }
    return state;
}