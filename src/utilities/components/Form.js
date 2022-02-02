import React from 'react'
import Radium from 'radium'
import '../../stylesheets/Form.scss'

const Form = () => {
    return (
        <form className="form">
            <div className="pick-up">
                <label htmlFor="pick-up-input" />
                <input id="pick-up-input" placeholder="Enter pickup location" />
                <i class="location arrow icon"></i>
            </div>
            <div className="destination">
                <label htmlFor="destination" />
                <input id="destination" placeholder="Enter destination" />
            </div>
            <div className="decor">
                <span className="dot-round" />
                <span className="line" />
                <span className="dot-square" />
            </div>
        </form>
    )
}

export default Radium(Form)
