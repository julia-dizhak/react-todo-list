// called 4 times: 1 - initial
const initialState = {
    counter: 1
};

const reducer = function(state = initialState, action) {
    //console.log(action);
    switch (action.type) {
        case 'INCREMENT':  
            return {
                ...state, // copy a whole state
                // counter: state.counter + 1
                counter: state.counter + action.value // modify one property
            }
    
        case 'DECREMENT':  
            return {
                ...state, 
                counter: state.counter - action.value 
            }
        
        default: 
            return state
    }    
    return state;
}

export default reducer;