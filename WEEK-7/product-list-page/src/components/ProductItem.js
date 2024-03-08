// src/components/ProductItem.js
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span>${product.price}</span>
      {/* Add any other product details you want to display */}
    </div>
  );
};

export default ProductItem;
