import React from 'react';
import ReactDOM from 'react-dom';

import PageContainer from './components/PageContainer';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './store/reducers/counter';
import productReducer from './store/reducers/products';
import userReducer from './store/reducers/users';
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';

const reducers = combineReducers({
    counterState: counterReducer,
    productState: productReducer,
    userState: userReducer
});

const store = createStore(
    reducers, 
    {}, // initial state
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//console.log(store);

// subscribe -> every time you change can you please execute this function
// store.subscribe(() => {
//     console.log('store has changed') // will run 3 times
// })

// console.log(store, store.getState()); -> counter is 1
// //store.dispatch({type: 'INCREMENT'}, value: 4);
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'INCREMENT'});
// console.log(store, store.getState()); // -> counter is 4

store.dispatch({
    type: 'ADD_USER',
    user: {name: 'Dan'}
});
console.log(store, store.getState()); 

// Provider - access to the store
ReactDOM.render(
    <Provider store={store}> 
        <PageContainer />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
