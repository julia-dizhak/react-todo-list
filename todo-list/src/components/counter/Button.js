import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './../../store/actions'; 

export class Button extends Component {
    actions = {
        "+": this.props.incrementCounter,
        "-": this.props.decrementCounter
    }

    handleClick = () => {
        // this.props.handleClick(this.props.increment);
        // this.props.incrementCounter(this.props.increment)
        // can do this.props.dispatch ?
       
        // this.props.operation
        // switch 
        // object look up
        this.actions[this.props.operation](this.props.operand)
    }

    render() {
        const { label } = this.props;  

        return (
            <React.Fragment>
                <label>{ label }: </label>
                <button 
                    onClick={this.handleClick}>
                    { this.props.operation } { this.props.operand }
                </button>
            </React.Fragment>
        );
    }    
}

export default Button = connect(
    null, 
    { incrementCounter, decrementCounter }
)(Button); // I need behavior

