import React, {Fragment} from 'react'

// import components
import CartItem from './CartItem'

// import the style of this component
import './cartTable.css';

// import data
import productsData from '../data/products';


export default function CartTable() {
    return (
        <Fragment>
            <div className="cart__container">
                {
                    productsData.map(item => <CartItem 
                            key={item.id} 
                            image={item.productImage} 
                            name={item.productName}
                            proRef={item.productRef}
                            color={item.productColor}
                            price={item.price}
                        />)
                }
            </div>
        </Fragment>
    )
}
