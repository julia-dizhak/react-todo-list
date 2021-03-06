import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '.'; 

export class Button extends Component {
    state = {
        actions: {
            "+": this.props.incrementCounter,
            "-": this.props.decrementCounter
        }
    }

    handleClick = () => {
        // this.props.handleClick(this.props.increment);
        // this.props.incrementCounter(this.props.increment)
        // can do this.props.dispatch ?
       
        // this.props.operation
        // switch 
        // object look up
        this.actions[this.props.operation](this.props.operand);
    }

    render() {
        const { label, onClick, children } = this.props;  
        //console.log(this.props.incrementCounter)
        console.log(this.state.actions)
        return (
            <React.Fragment>
                <label>
                    { label } :&nbsp; 
                    <button 
                        type="button"
                        onClick={onClick}>
                        { children }
                        { this.props.operation } { this.props.operand }
                    </button>
                </label>
            </React.Fragment>
        );
    }    
}

export default Button = connect(
    null, 
    { incrementCounter, decrementCounter }
)(Button); // behavior
