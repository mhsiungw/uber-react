import React from 'react'
import UnderlinedText from '../../utilities/components/UnderlinedText'

const SafetyItem = (props) => {
    const { info, className } = props

    const renderContent = () => {
        return info.map((item) => {
            return (
                <div key={item.title} className="item">
                    <img alt="item.title" src={item.img} />
                    <p className="title">{item.title}</p>
                    <p className="content">{item.content}</p>
                    <div className="links">
                        {item.links.map((link) => (
                            <UnderlinedText key={link} text={link} />
                        ))}
                    </div>
                </div>
            )
        })
    }
    return <div className={className}>{renderContent()}</div>
}

export default SafetyItem
