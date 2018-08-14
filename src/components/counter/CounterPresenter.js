import React from 'react';
import Button from './Button';
import SizeDisplay from './Display';
//import TextAreaCounter from './TextAreaCounter';

export default function CounterPresenter(props) {
    const { counter, onIncrement, onDecrement } = props;
    return (
        <div className="counter">
            <h1>Counter Display</h1>
            <p>counter is { counter }</p>
            
            <div>
                <Button 
                    onClick={onIncrement}
                    label="example 1"
                    operation="+" 
                    operand={1000}>
                increment 
                </Button>        
            </div>  

            <div>
                <Button
                    onClick={onDecrement} 
                    label="example 2"
                    operation="-"
                    operand={5}>
                decrement
                </Button>
            </div>        
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

            <React.Fragment>
                Textarea counter:
                {/* <TextAreaCounter /> */}
            </React.Fragment>
        </div>    
    );
}
