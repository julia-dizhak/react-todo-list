import React, { Component } from 'react';
import ItemList from './ItemList';

export default class ItemListContainer extends Component {
  render() {
    return (
        <React.Fragment>
          <ItemList items={['orange', 'apple', 'pear']} />
        </React.Fragment>
    );
  }
}
