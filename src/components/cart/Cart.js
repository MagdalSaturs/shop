import React, { useState } from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const cleanCart = props.cleanCart;
    const deleteProduct = props.deleteProduct;

    const promoCodeRef = React.createRef();
    const totalPriceRef = React.createRef();
    const usePromoPriceRef = React.createRef();

    const [Promo, setPromo] = useState(1);
    
    const promoCodes = ['PROMOCJA1', 'PROMOCJA2', 'PROMOCJA3', 'PROMOCJA4', 'PROMOCJA5', 'PROMOCJA6', 'PROMOCJA7', 'PROMOCJA8', 'PROMOCJA9', 'PROMOCJA10'];

    const getTotalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price;
        });

        if (Promo < 1) {
            return total * Promo;
        } else {
            return total;
        }
    };

    const getTotalPromoPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.promoPrice;
        });
        
        return total;
    };

    const getPromoCode = () => {
        if (promoCodes.includes(promoCodeRef.current.value)) {
            promoCodeRef.current.value = '';
            promoCodeRef.current.placeholder = 'Kod poprawny';
            promoCodeRef.current.style.backgroundColor = 'green';
            promoCodeRef.current.style.color = 'white';
            usePromoPriceRef.current.innerHTML = '';
            setPromo(0.8);
        }
        promoCodeRef.current.value = '';
    };

    return(
        <div className='cart'>
            <h2>Cart</h2>

            <div className='promoCodeDiv'>
                <input ref={promoCodeRef} type="text" placeholder='wpisz kod rabatowy' className='input'></input>
                <button onClick={getPromoCode} className='promoBtn'>Approve code</button>
            </div>

            {cart.map((item, index) => {
                return <div>
                    <p key={index}>{item.name}</p>
                    <button onClick={() => deleteProduct(item)} className='deleteBtn'>Delete</button>
                </div>
            })}
            <h5 ref={totalPriceRef}>Total price: {getTotalPrice()}zł</h5>
            <h6 ref={usePromoPriceRef}>By using the promotional price you will save: {getTotalPrice() - getTotalPromoPrice()}zł</h6>
            <button onClick={() => props.cleanCart(cleanCart)} className='clearBtn'>Clean cart</button>
        </div>
    )
};

export default Cart;