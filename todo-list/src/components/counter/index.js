import React, { Component } from 'react';
import { connect } from 'react-redux'; 

//import { store } from './../../index';
import CounterPresenter from './CounterPresenter';

const initialState = {
    counter: 0
};

// reducer
export const counterReducer = function(state = initialState, action) {
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
            return state;
    }    
}

// actions
export const incrementCounter = (value) => ({ type: 'INCREMENT', value }) 
export const decrementCounter = (value) => ({ type: 'DECREMENT', value }) 

const incrementUpdate = prevState => ({
    counter: prevState.counter + 1
});

const decrementUpdate = prevState => ({
    counter: prevState.counter - 1
});

export class CounterContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            counter: 0,
            title: 'Example'
        }

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }
    
    // incrementCounter = (increment) => {
    //     this.setState({ counter: this.state.counter + increment });
    // }

    // onIncrement() {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }
    onIncrement() {
        this.setState(incrementUpdate);
        //store.dispatch(incrementUpdate);
    }

    // onDecrement() {
    //     this.setState({
    //         counter: this.state.counter - 1
    //     })
    // }
    onDecrement() {
        this.setState(decrementUpdate);
    }

    render() {
        return (
            <CounterPresenter 
                counter={this.state.counter} 
                onIncrement={this.onIncrement}
                onDecrement={this.onDecrement}
            />
        );
    }
}

export default CounterContainer = connect(
    () => {
      return {};
    }, 
  () => {
    return {};
})(CounterContainer); 