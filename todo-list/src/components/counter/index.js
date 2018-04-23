import React, { Component } from 'react';

import Button from './Button';
import CounterDisplay from './Display';
import { connect } from 'react-redux'; // syntax named import

export class CounterContainer extends Component {
    // state = {
    //     counter: 1,
    //     title: 'Example'
    // }
    
    // incrementCounter = (increment) => {
    //     this.setState({ counter: this.state.counter + increment });
    // }

    render() {
        return (
            <div className="counter">
               <h2>Counter Display</h2>
                <div>
                    <Button 
                        label="example1" 
                        increment={1} />    
                </div>        
                <Button
                    label="example2"
                    increment={5} />
                <div>
                    <Button 
                        label="example3" 
                        increment={100} />    
                </div>     

                <CounterDisplay />
            </div>    
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