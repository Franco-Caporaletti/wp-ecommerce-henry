import React from 'react';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';


function ProdCategoryScreen(props) {

    let matchCategory = props.match.params.id; 

    const [infoProd, setInfoProd] = useState([])

    const catFilt = infoProd.filter(el => el.category === matchCategory)

    console.log(catFilt);

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(res => {
                setInfoProd(res.data)
            })
            .catch()
    }, [])

    
    

    return (
        
        <div>
            <ul className="products">
                {
                    catFilt.map(el => (

                        <li key={el.id}>
                            <div className="product">
                                <ProductCard
                                    name={el.name}
                                    price={el.price}
                                    stock={el.stock}
                                    description={el.description}
                                    category={el.category}
                                    id={el.id}
                                />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProdCategoryScreen;

