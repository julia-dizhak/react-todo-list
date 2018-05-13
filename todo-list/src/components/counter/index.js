import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import CounterPresenter from './CounterPresenter';

// actions
export const incrementCounter = (value) => ({ type: 'INCREMENT', value }) // action just an object
export const decrementCounter = (value) => ({ type: 'DECREMENT', value }) // action just an object

// reducer
const initialState = {
    counter: 1
};

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
            return state
    }    
}

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

    onIncrement() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    onDecrement() {
        this.setState({
            counter: this.state.counter - 1
        })
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