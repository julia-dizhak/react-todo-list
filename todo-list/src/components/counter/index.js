import React, { Component } from 'react';

import Button from './Button';
import CounterDisplay from './Display';

export default class CounterContainer extends Component {
    state = {
        counter: 1,
        title: 'Example'
    }
    
    incrementCounter = (increment) => {
        this.setState({ counter: this.state.counter + increment });
    }

    render() {
        return (
            <div className="counter">
                <div>
                    <Button 
                        label="example1" 
                        increment={1}
                        handleClick={this.incrementCounter} />    
                </div>        
                <Button
                    label="example2"
                    increment={5}
                    handleClick={this.incrementCounter} />
                <div>
                    <Button 
                        label="example3" 
                        increment={100}
                        handleClick={this.incrementCounter} />    
                </div>     

                <CounterDisplay counter={this.state.counter} />
            </div>    
        );
    }
}