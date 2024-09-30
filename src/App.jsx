// App.js
import React from 'react';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import './App.css'
const App = () => {
  return (
 
      <div>
        <h1 className='app-heading'>Shaji's first get hub check in this ecom app</h1>
        <ProductList />
        <ShoppingCart />
      </div>

  );
};

export default App;
