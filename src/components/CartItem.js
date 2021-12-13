import React, { useContext, useState } from 'react'

// import the style of this component
import './cartItem.css';

// context
import SubtotalContext from '../context/SubtotalContext';


function CartItem(props) {
    
    let {
        image,
        name,
        proRef,
        color,
        count,
        price
    } = props;

    let {subtotal, setSubtotal} = useContext(SubtotalContext);

    const [countProduct, setCountProduct] = useState(count);

    const increaseCount = () => {
        setCountProduct( countProduct + 1 );
    }
    const decreaseCount = () => {
        if(countProduct === 1) return;
        setCountProduct( countProduct - 1 );
    }

    // console.log(subtotal);
    // console.log(price);
    // console.log(subtotal + price);
    setSubtotal(subtotal + price);

    return (
        <div className="cart__item">
            <div className="bg-gray">
                <div className="product__img">
                    <img src={image} alt={name} />
                </div>
                <div className="product__title padding-l-2">
                    <h3 className="product__name">
                        {name}
                    </h3>
                    <p className="product__ref">
                        {proRef}
                    </p>
                </div>
                <h3 className="padding-l-2">
                    {color}
                </h3>
                <div className="set-count__section padding-l-2">
                    <p>{countProduct}</p>
                    <div className="set-count__buttons">
                        <button 
                            className="btn-gray__rounded"
                            onClick={increaseCount}
                        >
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        </button>
                        <button 
                            className="btn-gray__rounded"
                            onClick={decreaseCount}
                        >
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                        </button>
                    </div>
                </div>
                <h3 className="padding-l-2">
                    ${price * countProduct}
                </h3>
            </div>
            <button className="remove">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
    )
}

export default CartItem;