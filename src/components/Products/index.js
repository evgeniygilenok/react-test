import React from 'react';
import './Products.css';

const Products = ({addToCart, items}) => {
  return (
    <div className="products">
        {items.map((item, key) => {
          return (
            <div className="product" key={key}>
              <img className="product-image" src={item.img} alt={item.img}/>
              <p>
                name: {item.name}
              </p>
              <p>
                price: {item.price}
              </p>
              <button onClick={() => addToCart(item.id)}>
                add
              </button>
            </div>
          )
        })}
    </div>
  )
}

export default Products