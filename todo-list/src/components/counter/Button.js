import React, { Component } from 'react';

export default class Button extends Component {
    handleClick = () => {
        this.props.handleClick(this.props.increment)
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
