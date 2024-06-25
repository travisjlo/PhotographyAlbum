import React, { PureComponent } from 'react';
import { Outlet, Link } from "react-router-dom";
import './NavBar.css';
import './GlobalStylings.css';


export default class NavBar extends PureComponent {
    render() {
        return (

            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/" className="logo">
                        Home button here
                    </a>
                </div>
                <div className="navbar-center">
                    <ul className="nav-links">
                        <li>
                            <a href="/products">Products</a>
                        </li>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
        
            </nav>
        )
    }
}