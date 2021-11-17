import React from 'react'

// import the style of this component
import './paymentSection.css';

export default function PaymentSection() {
    return (
        <div className="payment__container">
            <div className="open-section"></div>
            <div className="payment">
                <div className="payment__body">
                    <h2 className="text-yellow">Card Details</h2>
                    <div>
                        <p>Select Card Type</p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="form-control">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input type="text" id="cardNumber" />
                    </div>
                    <div className="two-col__section">
                        <div className="two-col__item form-control">
                            <label>Expiry Date</label>
                            <input type="text" id="year" />
                            <input type="text" id="month" />
                            <input type="text" id="day" />
                        </div>
                        <div className="two-col__item form-control">
                            <label htmlFor="cvv" >CVV</label>
                            <input type="text" id="cvv" />
                        </div>
                    </div>
                </div>
                <button className="payment__button">Checkout</button>
            </div>
        </div>
    )
}
