import React from 'react'

import '../stylesheets/Navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="logo-list">
                <li className="logo-item">Uber</li>
                <li>
                    <span>Company</span>
                    <i className="angle down icon"></i>
                </li>
                <li>Safety</li>
                <li>Help</li>
                <li>COVID-19 resources</li>
            </ul>
            <ul className="info-list">
                <li className="icon-item">
                    <i className="user outline icon"></i>
                </li>
                <li className="language-item">
                    <i className="globe icon"></i>
                    <span>EN</span>
                </li>
                <li className="products-item">
                    <i className="chess board icon"></i>
                    <span>Products</span>
                </li>
                <li className="log-in-item">
                    <i className="user outline icon"></i>
                    <span>Log in</span>
                </li>
                <li className="sign-up-item">
                    <button>Sign up</button>
                </li>
                <li className="toggle-item">
                    <label htmlFor="toggle-navbar" />
                    <input id="toggle-navbar" type="checkbox" />
                    <ul className="toggle-list">
                        <li>Compnay</li>
                        <li>Safety</li>
                        <li>Help</li>
                        <li>COVID-19 resources</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
