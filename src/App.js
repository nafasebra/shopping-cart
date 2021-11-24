import React from 'react'

// import component style file
import './App.css';

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
