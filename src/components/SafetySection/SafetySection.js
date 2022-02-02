import React from 'react'
import SafetyItem from './SafetyItem'
import '../../stylesheets/SafetySection.scss'

const info = [
    {
        firstLine: [
            {
                img: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1004,h_670/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png',
                title: 'Our commitment to your safety',
                content: `With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.`,
                links: ['Read about our Community Guidelines', 'See all safety features'],
            },
            {
                img: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1004,h_670/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png',
                title: 'Setting 10,000+ cities in motion',
                content: `The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.`,
                links: ['View all cities'],
            },
        ],
    },
    {
        secondLine: [
            {
                title: 'About us',
                content: `Find out how we started, what drives us, and how we're reimagining how the world moves.`,
                links: ['Learn more about Uber'],
                img: 'https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_43,h_43/v1542256135/assets/dd/c53d7b-8921-4dc7-93f4-45fb59f4ffb9/original/person-multiple-outlined.svg',
            },
            {
                title: 'Newsroom',
                content: 'See announcements about our latest releases, initiatives, and partnerships.',
                links: ['Go to Newsroom'],
                img: 'https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_43,h_43/v1542254244/assets/eb/68c631-5041-4eeb-9114-80048a326782/original/document-outlined.svg',
            },
            {
                title: 'Global citizenship',
                content: 'Read about our commitment to making a positive impact in the cities we serve.',
                links: ['See our partnerships'],
                img: 'https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_43,h_43/v1542255370/assets/64/58118a-0ece-4f80-93ee-8041b53593d5/original/home-outlined.svg',
            },
        ],
    },
]

const Safety = () => {
    return (
        <div className="safety">
            <h2>Focus on Safety, wherever you go</h2>
            <SafetyItem info={info[0].firstLine} className="first-line-container" />
            <SafetyItem info={info[1].secondLine} className="second-line-container" />
        </div>
    )
}

export default Safety
