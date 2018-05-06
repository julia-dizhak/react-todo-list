import React, { Component } from 'react';
import './../style.css';

import TodoList from './todo/TodoList';
import MenuButton from './MenuButton';
import Menu from './Menu';
// import CounterContainer from './counter/';
import UsersList from './UsersList';
import ProductList from './ProductList';
import FavouriteColors from './FavouriteColors';

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
          
          {/* <CounterContainer /> */}

          <ProductList />

          <UsersList />

          <FavouriteColors />
          
        </React.Fragment>
    );
  }
}
