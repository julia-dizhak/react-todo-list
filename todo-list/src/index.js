import React from 'react';
import ReactDOM from 'react-dom';

import PageContainer from './components/PageContainer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

// called 4 times: 1 - initial
const reducer = function(state, action) {
    if (action.type === 'INCREMENT') {
        return {
            ...state, // copy a whole state
            // counter: state.counter + 1
            counter: state.counter + action.increment // modify one property
        }
    }
    return state;
}

const store = createStore(reducer, { counter: 1});
//console.log(store);

// subscribe -> every time you change can you please execute this function
// store.subscribe(() => {
//     console.log('store has changed') // will run 3 times
// })

// console.log(store, store.getState()); -> counter is 1
// //store.dispatch({type: 'INCREMENT'}, increment: 4);
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'INCREMENT'});
// console.log(store, store.getState()); // -> counter is 4

// Provider - access to the store
ReactDOM.render(
    <Provider store={store}> 
        <PageContainer />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
