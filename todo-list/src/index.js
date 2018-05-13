import React from 'react';
import ReactDOM from 'react-dom';

import PageContainer from './components/PageContainer';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import counterReducer from './store/reducers/counter';
import productReducer from './store/reducers/products';

import { usersReducer } from './components/users/UsersList';

import { favoriteColorsReducer } from './components/FavouriteColors';
//import { addColor, removeColor } from './components/FavouriteColors';

import registerServiceWorker from './registerServiceWorker';

const reducers = combineReducers({
    counterState: counterReducer,
    productState: productReducer,
    usersState: usersReducer,
    favoriteColors: favoriteColorsReducer
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

// functions from FavouriteColors Component
//store.dispatch(addColor("blue"));
//store.dispatch(addColor("gray"));
//store.dispatch(removeColor("black"));
//console.log(store.getState());

// Provider - access to the store
ReactDOM.render(
    <Provider store={store}> 
        <PageContainer />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

// browser shouldn’tperform a page refresh, but the application reloads and shows the correct output
if (module.hot) {
    module.hot.accept();
}

export default store;