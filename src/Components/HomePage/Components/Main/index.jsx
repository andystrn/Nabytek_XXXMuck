import { useEffect, useState } from "react";
import Product from "./components/Product";
import './style.css'

const Main = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://apps.kodim.cz/react-2/xxxmuck/products")
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="container">

        <div className="actualOffer">
            <h2>Aktuální nabídka</h2>
            <div className="infoText">
                <p>Nejnovější prémiové produkty od předních českých designerů.</p>
                <p>Doprava zdarma až k vám domů, na cenu nehleďte.</p>
            </div>
        </div>
        <div className="products">
            {!(products == []) ? (products.map((product) => <Product key={product.id} name={product.name} image={product.image} productId={product.id} />)) : null}
        </div>
        </div>
    )
}

export default Main;