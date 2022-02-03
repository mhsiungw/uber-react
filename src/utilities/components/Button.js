import React from 'react'
import Radium from 'radium'

const Button = (props) => {
    return <button style={[styles.base, styles[props.kind]]}>{props.text}</button>
}

const styles = {
    base: {
        padding: '12px 25px',
        fontFamily: 'UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
        border: 'none',
        fontWeight: '500',
        cursor: 'pointer',
    },
    dark: {
        backgroundColor: '#000000',
        color: '#fff',
        transition: 'background-color 0.3s ease-out',
        ':hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.81)',
        },
    },
    light: {
        backgroundColor: '#EEEEEE',
        color: '#000000',
        transition: 'background-color 0.3s ease-out',
        ':hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.096)',
        },
    },
}

export default Radium(Button)
