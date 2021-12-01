import React from 'react'

// import the style of this component
import './header.css';

// import asset files
import logo from '../assets/logo.png';


export default function Header() {
    return (
        <div className="header">
            <div className="app-logo">
                <img src={logo} alt="logo of website" />
            </div>
            <div className="vertical-seperator"></div>
            <h1 className="app-header">Your Shopping Cart</h1>
        </div>
    )
}
