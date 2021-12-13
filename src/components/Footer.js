import React, { useContext } from 'react'

// import the style of this component
import './footer.css';

// context
import SubtotalContext from '../context/SubtotalContext';


function Footer() {
    let stContext = useContext(SubtotalContext);

    return (
        <div className="footer">
            <div className="footer__left">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                <h4>Back to shop</h4>
            </div>
            <div className="footer__right">
                <h4>
                    Subtotal: ${stContext.subtotal}
                </h4>
            </div>
        </div>
    )
}

export default Footer;
