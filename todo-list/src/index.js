import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import TodoContainer from './components/todo/TodoContainer';
import { todoReducer } from './components/todo/TodoContainer';
import { TODO_ADD } from './components/todo/TodoContainer';

import ItemListContainer from './components/list/ItemListContainer';

import { usersReducer, UsersList } from './components/users/UsersList';

import CounterContainer from './components/counter/';
import { counterReducer } from './components/counter/';

import productReducer from './store/reducers/products';

import { favoriteColorsReducer } from './components/FavouriteColors';

import registerServiceWorker from './registerServiceWorker';

const reducers = combineReducers({
    todo: todoReducer,
    usersState: usersReducer,
    counterState: counterReducer,
    productState: productReducer,
    favoriteColors: favoriteColorsReducer
});

const store = createStore(
    reducers, 
    {}, // initial state
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log('initial state:');
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('store update, current state:');
  console.log(store.getState());
});

store.dispatch({
    type: TODO_ADD,
    todo: { id: '0', name: 'learn redux', completed: false },
});
store.dispatch({
    type: TODO_ADD,
    todo: { id: '1', name: 'learn react', completed: false },
});
unsubscribe();

ReactDOM.render(
    <Provider store={store}> 
        <Router>
            <React.Fragment>
                <Route exact path="/" component={TodoContainer} />
                <Route exact path="/users-list" component={UsersList} />
                <Route exact path="/counter" component={CounterContainer} />
                <Route exact path="/list" component={ItemListContainer} />
            </React.Fragment>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

// browser shouldn’tperform a page refresh, but the application reloads and shows the correct output
if (module.hot) {
    module.hot.accept();
}

export { store }