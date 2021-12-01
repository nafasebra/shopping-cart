import React from 'react'

// import the style of this component
import './cartItem.css';

function CartItem() {
    return (
        <div className="cart__item">
            <div className="bg-gray">
                <div className="product__img">
                    <img 
                        src="https://becomestar.files.wordpress.com/2016/03/jas_2.jpg" 
                        alt="" 
                    />
                </div>
                <div className="product__title padding-l-2">
                    <h3 className="product__name">T-Shirt</h3>
                    <p className="product__ref">Ref. 1254654</p>
                </div>
                <h3 className="padding-l-2">Blue</h3>
                <div className="set-count__section padding-l-2">
                    <p>2</p>
                    <div className="set-count__buttons">
                        <button className="btn-gray__rounded">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        </button>
                        <button className="btn-gray__rounded">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                        </button>
                    </div>
                </div>
                <p className="padding-l-2">$30</p>
            </div>
            <div className="remove">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </div>
        </div>
    )
}

export default CartItem;