import './product.css'

function Product(props) {
    return (
        <div className="product-card">
            <h2 className="product-name">{props.name}</h2>
            <p className="product-description">{props.description}</p>
            <p className="product-price">Price: ${props.price}</p>
        </div>

    )
}


export default Product
