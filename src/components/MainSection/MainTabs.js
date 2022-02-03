import React from 'react'
import { ReactComponent as EarnFilledSvg } from '../../imgs/Earn-filled.svg'
import { ReactComponent as RestaurantOutlined } from '../../imgs/restaurant-outlined.svg'
import { ReactComponent as CarFrontOutlined } from '../../imgs/car-front-outlined.svg'

import '../../stylesheets/MainSection/MainTabs.scss'

const MainTabs = (props) => {
    const { clickedItem } = props
    return (
        <div onClick={props.onShow} className="main-tabs">
            <div className={`tab drive ${clickedItem === 'drive' ? 'focused' : ''}`}>
                <EarnFilledSvg />
                <span>Drive or deliver</span>
            </div>
            <div className={`tab eat ${clickedItem === 'eat' ? 'focused' : ''}`}>
                <RestaurantOutlined />
                <span>Eat</span>
            </div>
            <div className={`tab ride ${clickedItem === 'ride' ? 'focused' : ''}`}>
                <CarFrontOutlined />
                <span>Ride</span>
            </div>
        </div>
    )
}

export default MainTabs
