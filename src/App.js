import React from 'react'

// import components
import CartSection from './components/CartSection';
import PaymentSection from './components/PaymentSection';

export default function App() {
    return (
        <div className="app">
            <CartSection />
            <PaymentSection />
        </div>
    )
}
