import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/actions/products';

export class ProductList extends Component {
  componentDidMount() {
      
    this.props.dispatch(fetchProducts());

    // using fetch
    // fetch('https://documents-de4ba.firebaseio.com/documents.json', {
    //     credentials: 'same-origin'
    // })
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //         this.setState({documents: data});
    //     });
  }
  
  render() {
    let { error, loading, products } = this.props;

    if (!products) {
        products = []
    }

    if (error) {
        return <div className="product-list">Error! {error.message}</div>;
    }

    if (loading) {
        return <div className="product-list">Loading...</div>;
    }

    return (
        <div className="product-list">
            <h2>Product list</h2>
            <ul>
                {products.map(product =>
                    <li key={product.token}>{product.document_name}</li>
                )}
            </ul>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    products: state.productState.items,
    loading: state.productState.loading,
    error: state.productState.error
});

export default connect(mapStateToProps)(ProductList);
