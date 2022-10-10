import React, { useState } from 'react';
import './Products.css';

const Products = (props) => {
    const products = props.products;

    const searchProduct = React.createRef();

    const cheapSort = () => {
        const sortedProducts = products.sort((a,b) => a.price - b.price);

        props.setProducts([...sortedProducts]);
    };

    const expensiveSort = () => {
        const sortedProducts = products.sort((a,b) => b.price - a.price);

        props.setProducts([...sortedProducts]);
    };

    const productSearch = () => {
        const productName = searchProduct.current.value;
        props.setProducts([...products.filter((item) => item.name.includes(productName))]);
    };

    return(
        <div className='MainProducts'>
            <h2>Products</h2>

            <input ref={searchProduct} type="text" placeholder='wyszukaj produkt' className='searchProduct'></input>
            <button onClick={productSearch} className='searchBtn'>Serch Product</button>

            <button onClick={cheapSort} className='cheapBtn'>From the cheapest</button>
            <button onClick={expensiveSort} className='expensiveBtn'>From the dearest</button>

            <div className='Products'>
                {products.map((product) => {
                    return <div className='product' key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p >{product.Price
                            ? `Promo price: ${product.promoPrice}zł`
                            : `Price ${product.price}zł`}</p>
                        <button onClick={() => props.setCart(product)} className='btn'>Add to cart</button>
                    </div>
                })}
            </div>
        </div>
    )
};

export default Products;