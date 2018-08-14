import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions

// reducer
export function favoriteColorsReducer(state, action) {
    if (state === undefined) {
      state = [];
    }

    switch (action.type) {
        case 'ADD':
            return state.concat(action.color);
        
        case 'REMOVE':
            return state.filter(function(item) { // the filter method which returns a brand new array with the value we want to remove omitted.
                return item !== action.color  
            });    
        
        default:
            return state;
    }
}    

// actions creators - one purpose is return an action
export function addColor(value) {
    return {
        type: 'ADD',
        color: value
    }
}

export function removeColor(value) {
    return {
        type: 'REMOVE',
        color: value
    }
}

export class FavouriteColors extends Component {
    componentDidMount() {

    }
    
    render() {
        let { colors } = this.props; 

        return (
            <div className="favourite-colors">
                <h2>Favourite colors</h2>
                <ul>
                    {colors.map( (color, index) =>
                        <li key={index}>{ color }</li>
                    )}
                </ul>
            </div>
        );
    }
  }


const mapStateToProps = state => ({
    colors: state.favoriteColors
});

export default connect(mapStateToProps)(FavouriteColors);