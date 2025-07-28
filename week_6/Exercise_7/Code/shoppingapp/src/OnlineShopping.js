// src/OnlineShopping.js
import React, { Component } from 'react';
import Cart from './Cart';
import './CartTable.css'; // Importing CSS

class OnlineShopping extends Component {
  render() {
    const cartItems = [
      { itemname: "Laptop", price: 60000 },
      { itemname: "Mobile", price: 25000 },
      { itemname: "Headphones", price: 2000 },
      { itemname: "Mouse", price: 500 },
      { itemname: "Keyboard", price: 1500 },
    ];

    return (
      <div>
        <h2><center>🛒 Online Shopping Cart</center></h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <Cart key={index} itemname={item.itemname} price={item.price} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;
