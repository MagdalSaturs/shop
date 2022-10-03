import React, { useState, useEffect } from 'react';
import './App.css';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('./products.json');
      const data = await response.json();

      setProducts(data.products);
    };
  
    getData();
  }, []);

  const setCartDelegate = (product) => {
    setCart([...cart, product]);
  };

  const cleanCart = () => {
    setCart([]);
  };

  const deleteProduct = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart([...newCart]);
    
  };

  return (
    <div className="App">
      <div>
        <h1>Shop</h1>
      </div>
      {!!cart.length && <Cart cart={cart} cleanCart={cleanCart} deleteProduct={deleteProduct} products={products} />}
      <Products products={products} setProducts={setProducts} setCart={setCartDelegate} />
    </div>
  );
}

export default App;