import React from 'react'

// import components
import CartItem from './CartItem'

// import the style of this component
import './cartTable.css';

// import data
import productsData from '../data/products';


export default function CartTable() {
    return (
        <div className="cart__container">
            {
                productsData.map(item => <CartItem 
                        key={item.id} 
                        image={item.productImage} 
                        name={item.productName}
                        proRef={item.productRef}
                        color={item.productColor}
                        count={item.count}
                        price={item.price}
                    />)
            }
        </div>
    )
}
