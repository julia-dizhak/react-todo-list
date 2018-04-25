import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from './../store/actions/products';

export class ProductList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }
  
  render() {
    let { error, loading, products } = this.props;
    if (!products) {
        products = []
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <React.Fragment>
            <h2>Product list</h2>
            <ul>
                {products.map(product =>
                    <li key={product.token}>{product.document_name}</li>
                )}
            </ul>
        </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
    products: state.productState.items,
    loading: state.productState.loading,
    error: state.productState.error
});

export default connect(mapStateToProps)(ProductList);