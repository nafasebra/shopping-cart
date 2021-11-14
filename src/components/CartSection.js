import React from 'react'

// import components
import Header from './Header';
import CartTable from './CartTable';
import Footer from './Footer';

// import the style of this component
import './cardSection.css';

export default function CartSection() {
    return (
        <div className="cart-section__container">
            <Header />

            <CartTable />

            <Footer />
        </div>
    )
}
