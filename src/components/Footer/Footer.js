import React from 'react'
import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'
import FooterBottom from './FooterBottem'

import '../../stylesheets/Footer/Footer.scss'

const info = [
    {
        title: 'Company',
        contents: ['About us', 'Our offerings', 'Newsroom', 'Investors', 'Blog', 'Careers', 'AI', 'Gift cards'],
    },
    {
        title: 'Products',
        contents: ['Ride', 'Drive', 'Deliver', 'Eat', 'Uber for Business', 'Uber Freight'],
    },
    {
        title: 'Global citizenship',
        contents: ['Safety', 'Diversity and inclusion'],
    },
    {
        title: 'Travel',
        contents: ['Airports', 'cities'],
    },
]

const Footer = () => {
    return (
        <div className="footer">
            <FooterTop />
            <FooterMiddle info={info} />
            <FooterBottom />
        </div>
    )
}

export default Footer
