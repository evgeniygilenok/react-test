import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {
  addToCart,
  removeFromCart
} from './actions/';

import Cart from './components/Cart';
import Products from './components/Products'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='cart'>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <Cart 
              removeFromCart={this.props.removeFromCart.bind(this)}
              items={this.props.cartItems}
            />
          </table>
        </div>
        <Products 
          addToCart={this.props.addToCart.bind(this)}
          items={this.props.products}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cartItems,
  products: state.products
})

const mapDispatchToProps = {
  addToCart,
  removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
