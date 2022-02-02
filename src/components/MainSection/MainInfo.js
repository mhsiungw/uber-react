import React from 'react'
import UnderLinedText from '../../utilities/components/UnderlinedText'
import Button from '../../utilities/components/Button'
import Form from '../../utilities/components/Form'
import '../../stylesheets/MainInfo.scss'

const MainInfo = (props) => {
    const { clickedItem, info } = props

    const renderContent = () => {
        return clickedItem === 'ride' ? <Form /> : <p className="content">{info[clickedItem].content}</p>
    }
    const renderClassName = () => {
        switch (clickedItem) {
            case clickedItem:
                return clickedItem
            default:
                return ''
        }
    }
    const renderedActions = () => {
        return (
            <div className={`actions ${renderClassName()}`}>
                <Button text={info[clickedItem].button} kind="dark" />
                <div className="link">
                    {clickedItem === 'ride' ? (
                        <Button text={info[clickedItem].link} kind={clickedItem === 'ride' ? 'light' : 'dark'} />
                    ) : (
                        <UnderLinedText text={info[clickedItem].link} />
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="main-info">
            <h2 className="title">{info[clickedItem].title}</h2>
            {renderContent()}
            {renderedActions()}
        </div>
    )
}

export default MainInfo
