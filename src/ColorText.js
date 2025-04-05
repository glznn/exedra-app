import React from 'react'

const ColorText = ({ text }) => {
    const renderStyledText = (text) => {
        const parts = text.split(/(\d+(\.\d+)?%?)/gi);

        return parts.map((part, index) => {
            if (/\d+(\.\d+)?%?/.test(part)) {
                return <span key={index} style = {{ color:"rgb(227, 127, 212)"}}> {part} </span>
            }

            return <span key={index}> {part} </span>
        })
    }

    return (
        <span>{renderStyledText(text)}</span>
    )
}

export default ColorText