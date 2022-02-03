import React from 'react'

import '../../stylesheets/Navbar/Navbar.scss'

const Navbar = (props) => {
    const { handleToggleNavbar, isToggleNavbarShow } = props
    return (
        <div className="navbar">
            <ul className="logo-list">
                <li className="logo-item">Uber</li>
                <li>
                    <span>Company</span>
                    <i className="angle down icon" />
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
                <li className="toggle-navbar-button">
                    <button
                        onClick={() => handleToggleNavbar(true)}
                        className={`show-button ${isToggleNavbarShow ? 'display-none' : ''}`}
                    >
                        <label htmlFor="toggle-navbar" />
                        <input id="toggle-navbar" type="checkbox" />
                    </button>
                    <button
                        onClick={() => handleToggleNavbar(false)}
                        className={`cancel-button ${isToggleNavbarShow ? '' : 'display-none'}`}
                    >
                        &#10005;
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
