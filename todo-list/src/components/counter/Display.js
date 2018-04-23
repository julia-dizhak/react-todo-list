import React from 'react';
import { connect } from 'react-redux';

const bytesDisplay = (bytes) => {
    if (bytes > 100000) {
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

const mapStateToProps = state => {
    console.log(state);
    return {
        counter: state.counter
    }
} // don't need behavior here; it's HOC

export default connect(mapStateToProps)(SizeDisplay); 