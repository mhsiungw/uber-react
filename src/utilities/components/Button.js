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
        ':hover': {
            opacity: '0.8',
        },
    },
    dark: {
        background: '#000000',
        color: '#fff',
    },
    light: {
        background: '#EEEEEE',
        color: '#000000',
    },
}

export default Radium(Button)
