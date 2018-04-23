import React, { Component } from 'react';
import { connect } from 'react-redux';

const incrementCounter = (increment) => ({ type: 'INCREMENT', increment }) // action just an object

export class Button extends Component {
    handleClick = () => {
        //this.props.handleClick(this.props.increment);
        this.props.incrementCounter(this.props.increment)
        // can do this.props.dispatch ?
    }

    render() {
        const { label } = this.props;  

        return (
            <React.Fragment>
                <label>{ label }: </label>
                <button 
                    onClick={this.handleClick}>
                    +{ this.props.increment }
                </button>
            </React.Fragment>
        );
    }    
}

export default Button = connect(
    null, 
    { incrementCounter }
)(Button); // I need behavior

