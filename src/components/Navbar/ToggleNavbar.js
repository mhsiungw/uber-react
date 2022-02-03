import React, { useLayoutEffect, useState } from 'react'
import '../../stylesheets/Navbar/ToggleNavbar.scss'

/* to detect the width of viewport */
const useWindowSize = () => {
    const [size, setSize] = useState(0)

    const updateSize = () => {
        setSize(window.innerWidth)
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])
    return size
}

const ToggleNavbar = (props) => {
    const width = useWindowSize()

    if (width > 1135 && props.isToggleNavbarShow) {
        props.handleToggleNavbar(false)
    }

    return (
        <div className={`toggle-navbar ${props.isToggleNavbarShow ? 'show' : ''}`}>
            <div className="contents">
                <p>
                    <span>Compnay</span>
                    <i className="angle down icon" />
                </p>
                <p>Safety</p>
                <p>Help</p>
                <p>COVID-19 resources</p>
            </div>
            <div className="buttons">
                <button className="product-button">
                    <i className="chess board icon"></i>
                    <span>Products</span>
                </button>
                <button className="language-button">
                    <i className="globe icon"></i>
                    <span>EN</span>
                </button>
            </div>
        </div>
    )
}

export default ToggleNavbar
