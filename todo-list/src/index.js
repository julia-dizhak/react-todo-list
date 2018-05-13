import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import TodoContainer from './components/todo/TodoContainer';

import CounterContainer from './components/counter/';
import { counterReducer } from './components/counter/';

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

ReactDOM.render(
    <Provider store={store}> 
        <Router>
            <React.Fragment>
                <Route exact path="/" component={TodoContainer}/>
                <Route exact path="/counter" component={CounterContainer} />
            </React.Fragment>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

// browser shouldn’tperform a page refresh, but the application reloads and shows the correct output
if (module.hot) {
    module.hot.accept();
}

export default store;