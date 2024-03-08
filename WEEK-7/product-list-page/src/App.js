// src/App.js
import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API or use a static data file
    // For simplicity, we'll use a static array as an example
    const fetchData = async () => {
      // Replace this with your API call or data fetching logic
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Product List Page</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
