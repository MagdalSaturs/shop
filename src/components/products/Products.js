import './Products.css';

const Products = (props) => {
    const products = props.products;

    return(
        <div className='Products'>
        <h2>Products</h2>

        {products.map((product) => {
            return <div className='product' key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p >{product.Price
                    ? `Cena promocyjna: ${product.promoPrice}PLN`
                    : `Cena ${product.price}zł`}</p>
                <button onClick={() => props.setCart(product)} className='btn'>Add to cart</button>
            </div>
        })}
        </div>
    )
}

export default Products;