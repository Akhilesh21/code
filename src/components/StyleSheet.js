//css stylesheet
import React from 'react'
import './myStyles.css'

function StyleSheet(props) {
    let className =props.primary ? 'primary': ''
    return (
        <div>
            <h1 className={`${className} font-x`}>StyleSheets</h1>
        </div>
    )
}

export default StyleSheet
