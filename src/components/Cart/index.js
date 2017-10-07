import React from 'react';
import './Cart.css'

const Cart = ({removeFromCart, items}) => {
  function totoalPrice() {
    let total = 0;
    items.map((item) => {
      return total += item.price;
    })
    return total
  }
  return (
    <tbody>
      {items.map((item, key) => {
        return (
          <tr className="cart-item" key={key}>
            <td><img className="cart-image cart-item-info" src={item.img} alt={item.img}/></td>
            <td><p className="name cart-item-info">
              {item.name}
            </p></td>
            <td><p className="price cart-item-info">
              {item.price}
            </p></td>
            <td><button className="cart-item-info" onClick={() => removeFromCart(item.id)}>
              delete
            </button></td>
          </tr>
        )
      })}
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>Total: {totoalPrice()}</td>
      </tr>
    </tbody>
  )
}

export default Cart;