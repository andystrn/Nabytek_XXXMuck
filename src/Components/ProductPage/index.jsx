import './style.css'
import Header from '../HomePage/Components/Header';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const ProductPage = () => {
    const { id } = useParams();
    const [productInfo, setProductInfo] = useState({});

    useEffect(()=> {
        fetch(`https://apps.kodim.cz/react-2/xxxmuck/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
        setProductInfo(data);
      });
    }, []);

    return (
        <>
        <Header />
        <div className="product">
            <img src={productInfo.image} />
            <div className="productSection">
                <h1>{productInfo.name}</h1>
                <button>Objednat</button>
            </div>
        </div>
        </>
    )
}

export default ProductPage;