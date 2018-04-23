import React, { Component } from 'react';

import Button from './Button';
import SizeDisplay from './Display';
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
                        operation="+" 
                        operand={1000} />    
                </div>        
                <Button
                    label="example2"
                    operation="-"
                    operand={5} />
                {/* <div>
                    <Button 
                        label="example3" 
                        operation="*"
                        operand={20} />    
                </div> 
                <div>
                    <Button 
                        label="example3" 
                        operation="/"
                        operand={100} />    
                </div>       */}

                <SizeDisplay />
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