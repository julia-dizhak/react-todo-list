import React, { Component } from 'react';
import './../style.css';

import TodoList from './TodoList';
import MenuButton from './MenuButton';
import Menu from './Menu';
import CounterContainer from './counter/';
import TextAreaCounter from './counter/TextAreaCounter';
import ProductList from './ProductList';

export default class PageContainer extends Component {
  state = {
    visible: false
  }

  handleMouseDown = (event) => {
    this.setState({ visible: !this.state.visible })
    event.stopPropagation();
  }

  render() {
    return (
        <React.Fragment>
          <MenuButton handleMouseDown={this.handleMouseDown} />
          <Menu 
              visibleState={this.state.visible}
              handleMouseDown={this.handleMouseDown} />
          <TodoList />
          
          <React.Fragment>
            Textarea counter:
            <TextAreaCounter />
          </React.Fragment>

          <CounterContainer />

          <ProductList />
        </React.Fragment>
    );
  }
}
