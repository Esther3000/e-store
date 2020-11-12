import React from 'react';
import './ProductComponents.css';

function Product(props){
    return(
        <div>
            <figure>
                <img src={props.product.image} alt={props.product.name} height="275px" width="260px" />
                <span className="label">{props.product.label}</span>
                 <figcaption>{props.product.name}</figcaption>
                 <p>Ksh.{props.product.price}</p>
            </figure>
        </div>
    )
}
export default Product