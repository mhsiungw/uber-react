import React from 'react'

import '../stylesheets/AppsDisplaySection.scss'

const info = [
    {
        img: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_270,h_270/v1618459302/assets/8e/cbcd2e-e7f1-4bd1-ae4e-5343b99ff22f/original/Driver-App-logo.png',
        text: 'Download the Driver app',
    },
    {
        img: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_270,h_270/v1618459257/assets/13/6bfdbd-cdb6-4221-92c1-cab1feaa39f3/original/Rider-App-logo.png',
        text: 'Download the Uber app',
    },
]

const AppsDisplaySection = () => {
    const renderItems = () => {
        return info.map((item) => {
            return (
                <div key={item.text} className="app-item">
                    <img src={item.img} alt="apps-img" />
                    <p>{item.text}</p>
                    <i className="arrow right icon" />
                </div>
            )
        })
    }
    return (
        <div className="apps-display-section">
            <h2>There's more to love in the apps</h2>
            <div className="apps-display-container">{renderItems()}</div>
        </div>
    )
}

export default AppsDisplaySection
