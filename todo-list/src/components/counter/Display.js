import React from 'react';
import { connect } from 'react-redux';

export function CounterDisplay(props) {
    const { counter } = props;  

    return (
        <div>
            sum is { counter }
        </div>    
    );
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
} // don't need behavior here; it's HOC

export default connect(mapStateToProps)(CounterDisplay); 