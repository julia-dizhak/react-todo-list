import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    text: PropTypes.string,
    length: PropTypes.number,
    handleOnChange: PropTypes.func
},
defaultProps = {
    text: 'Bob',
};

export default class TextAreaCounter extends Component {
    state = {
        text: this.props.text,
        length: 0
    }

    componentWillReceiveProps = function(newProps) { 
        this.setState({
            text: newProps.defaultValue
      });
    }

    // componentDidUpdate = function(oldProps, oldState) { 
    //     if (this.state.text.length > 3) {
    //         this.replaceState(oldState); 
    //     }
    // }

    handleOnChange = (event) => {
        this.setState({
            length: event.target.value.length,
            text: event.target.value
        })
    }
  
    render() {
        const { text } = this.props;
        let counter = null;

        if (this.state.text.length > 0) {
            counter = <div>{ this.state.length } character(s)</div>
        }

        return (
            <React.Fragment>
                <textarea 
                    value={this.state.text}
                    onChange={this.handleOnChange}>
                </textarea>
                { counter }
            </React.Fragment>
        );
    }
}

//console.log(TextAreaCounter.props); 
//console.log(TextAreaCounter.state); 

TextAreaCounter.propTypes = propTypes;
TextAreaCounter.defaultProps = defaultProps;