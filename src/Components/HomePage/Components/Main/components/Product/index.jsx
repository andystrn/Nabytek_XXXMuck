import { Link } from "react-router-dom";
import './style.css'

const Product = ({name, image, productId}) => {

return (
    <Link to={`/product/${productId}`} style={{ textDecoration: 'none', color: 'black' }}>
        <img src={image} width="300" height="300" />
        <h3>{name}</h3>
    </Link>
)
}

export default Product;