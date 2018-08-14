import React from 'react';
import { connect } from 'react-redux';

export const bytesDisplay = (bytes) => {
    if (bytes > 1000000) {
        return `${bytes/1000}KB`;
    } else {
        return `${bytes}B`;
    }
}

export function SizeDisplay(props) {
    const { counter } = props;  

    return (
        <div>
            sum is { bytesDisplay(counter) }
        </div>    
    );
}

export const mapStateToProps = state => {
    return {
        counter: state.counterState.counter
    }
} // don't need behavior here; it's HOC

export default connect(mapStateToProps)(SizeDisplay); 