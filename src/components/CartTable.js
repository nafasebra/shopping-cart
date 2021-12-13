import React, { useState } from 'react'

// import components
import SubtotalContext from './../context/SubtotalContext';
import CartItem from './CartItem'
import Footer from './Footer';

// import the style of this component
import './cartTable.css';

// import data
import productsData from '../data/products';


function CartTable() {
    const [ subtotal, setSubtotal ] = useState(0);

    return (
        <div className="cart__container">
            <SubtotalContext.Provider value={{subtotal, setSubtotal}}>
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
        
                <Footer />
            </SubtotalContext.Provider>
        </div>
    )
}

export default CartTable;
