import React from 'react'
import Radium from 'radium'

const MainBackground = (props) => {
    const { clickedItem, info } = props
    return (
        <div style={[styles.mainBackground]} className="main-background">
            <img src={info[clickedItem].img} alt="background" style={[styles.img]} />
        </div>
    )
}

const styles = {
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'top',
    },
}

export default Radium(MainBackground)
