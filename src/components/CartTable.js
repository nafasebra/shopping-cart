import React from 'react'

// import components
import CartItem from './CartItem'

// import the style of this component
import './cartTable.css';

export default function CartTable() {
    return (
        <div className="cart__container">
            {/* i will use map function to display all item */}
            <CartItem />
        </div>
    )
}
