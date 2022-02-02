import React from 'react'
import Radium from 'radium'

const UnderlinedText = (props) => {
    return <span style={[style.UnderlinedText]}>{props.text}</span>
}

const style = {
    UnderlinedText: {
        backgroundImage:
            'linear-gradient( transparent calc(100% - 1px), #000000 1px ), linear-gradient( transparent calc(100% - 1px), #CBCBCB 1px )',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '0% 6px, 100% 6px',
        backgroundPosition: '0 bottom, 0 bottom',
        fontFamily: 'UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
        color: '#000000',
        fontSize: '16px',
        fontWeight: '300',
        transition: 'all 500ms cubic-bezier(0.23, 1, 0.32, 1)',
        paddingBottom: '6px',
        cursor: 'pointer',
    },
}

export default Radium(UnderlinedText)
