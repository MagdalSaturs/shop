import './Cart.css';
import React, { useState } from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const cleanCart = props.cleanCart;
    const deleteProduct = props.deleteProduct;
    // const products = props.products;

    // console.log(products);

    const [Promo] = useState(1);

    const promoCodes = ['PROMOCJA1', 'PROMOCJA2', 'PROMOCJA3', 'PROMOCJA4', 'PROMOCJA5', 'PROMOCJA6', 'PROMOCJA7', 'PROMOCJA8', 'PROMOCJA9', 'PROMOCJA10'];

    const getTotalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price;
        });
        return total;
    };

    const getTotalPromoPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.promoPrice;
        });
        return total;
    };

    const getPromoCode = () => {
        if (promoCodes.includes(document.getElementById('promoCode').value)) {
            document.getElementById('promoCode').value = '';
            document.getElementById('promoCode').placeholder = 'Kod poprawny';
            document.getElementById('promoCode').style.backgroundColor = 'green';
            document.getElementById('promoCode').style.color = 'white';
            document.getElementById('totalPrice').innerHTML = `Total price: ${getTotalPromoPrice() * Promo}zł`;
            document.getElementById('usePromoPrice').innerHTML = '';
        }
        document.getElementById('promoCode').value = '';
    };

    return(
        <div className='cart'>
            <h2>Cart</h2>

            <div className='promoCodeDiv'>
                <input id='promoCode' type="text" placeholder='wpisz kod rabatowy' className='input'></input>
                <button onClick={getPromoCode} className='promoBtn'>Approve code</button>
            </div>

            {cart.map((item, index) => {
                return <div>
                    <p key={index}>{item.name}</p>
                    <button onClick={() => deleteProduct(item)} className='deleteBtn'>Delete</button>
                </div>
            })}
            <h5 id='totalPrice'>Total price: {getTotalPrice()}zł</h5>
            <h6 id='usePromoPrice'>By using the promotional price you will save: {getTotalPrice() - getTotalPromoPrice()}zł</h6>
            <button onClick={() => props.cleanCart(cleanCart)} className='clearBtn'>Clean cart</button>
        </div>
    )
};

export default Cart;