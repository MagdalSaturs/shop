import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const cleanCart = props.cleanCart;
    const deleteProduct = props.deleteProduct;

    const promoCodes = ['PROMOCJA1', 'PROMOCJA2'];

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
        code = document.getElementById('promoCode').value;
        
        if (promoCodes.includes(code)) {
            document.getElementById('promoCode').value = '';
            document.getElementById('promoCode').placeholder = 'Kod poprawny';
            document.getElementById('promoCode').style.backgroundColor = 'green';
            document.getElementById('promoCode').style.color = 'white';

            promoPrice = item.promoPrice

            return promoPrice;
        }
        else {
            document.getElementById('promoCode').value = '';
            document.getElementById('promoCode').placeholder = 'Kod niepoprawny';
            document.getElementById('promoCode').style.backgroundColor = 'red';
            document.getElementById('promoCode').style.color = 'white';

            promoPrice = item.price

            return promoPrice;
        }
    };

    return(
        <div className='cart'>
            <h2>Cart</h2>
            {cart.map((item, index) => {
                return <div>
                    <p key={index}>{item.name}</p>
                    <h4 key={index}>Cena produktu: {item.price}</h4>
                    <button onClick={() => deleteProduct(item)} className='deleteBtn'>Delete</button>
                </div>
            })}
            <h5>Total price: {getTotalPrice()}zł</h5>
            <h6>Używając ceny promocyjnej zaoszczędzisz: {getTotalPrice() - getTotalPromoPrice()}</h6>
            <button onClick={() => props.cleanCart(cleanCart)} className='clearBtn'>Wyszyść koszyk</button>
            <div className='promoCodeDiv'>
                <input id='promoCode' type="text" placeholder='wpisz kod rabatowy' className='input'></input>
                <button onClick={() => getPromoCode()} className='promoBtn'>Zatwierdź kod</button>
            </div>
        </div>
    )
};

export default Cart;