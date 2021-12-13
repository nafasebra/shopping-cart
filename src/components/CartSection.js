import React from 'react'

// import components
import Header from './Header';
import CartTable from './CartTable';

// import the style of this component
import './cartSection.css';

function CartSection() {
    return (
        <div className="cart-section__container">
            <Header />

            <CartTable />
        </div>
    )
}

export default CartSection;
