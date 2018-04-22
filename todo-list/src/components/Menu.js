import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';  

export default class Menu extends Component {
    getVisibleState = () => {
        if (this.props.visibleState === true) {
          return 0;
        } else {
          return -100;
        }
    }

    render() {
        let self = this;

        return (
            <Motion style={{ x: spring(this.getVisibleState()) }}>
            {
                function({x}) {
                    return (
                        <div 
                            onMouseDown={self.props.handleMouseDown} 
                            className="flyout-menu"
                            style={{transform: "translate3d(" + x + "vw, 0vw, 0)"}}>
                            <h2><a href="./">Home</a></h2>
                        </div>
                    );
                }
            }
        </Motion>
        );
    }
}
