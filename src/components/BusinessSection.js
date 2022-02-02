import React from 'react'
import Button from '../utilities/components/Button'
import '../stylesheets/BusinessSection.scss'

const info = {
    title: 'Uber for Business',
    content: 'Transform the way your company moves and feeds its people.',
    button: 'See how',
}

const Business = () => {
    return (
        <div className="business-background">
            <div className="business">
                <h2 className="title">{info.title}</h2>
                <p className="content">{info.content}</p>
                <Button text={info.button} kind="dark" />
            </div>
        </div>
    )
}

export default Business
