import React from 'react'

const FooterMiddle = (props) => {
    const renderContent = () => {
        return props.info.map((item) => {
            return (
                <div key={item.title} className="item">
                    <p className="title">{item.title}</p>
                    {item.contents.map((content) => (
                        <p key={content}>{content}</p>
                    ))}
                </div>
            )
        })
    }
    renderContent()

    return <div className="footer-middle">{renderContent()}</div>
}

export default FooterMiddle
