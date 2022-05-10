import React, { useEffect, useState } from 'react'
import rgbToHex from './utils'


const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const hex = rgbToHex(...rgb)
    const hexValue = `#${hexColor}`
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setAlert(false)
        }, 3000)
        return () => clearTimeout(timeoutId)
    }, [alert]);

    return (
        <article
            className={`py4 px-8 cursor-pointer text-base normal-case ${index >= 10 ? 'text-white' : 'text-black'}`}
            style={{ backgroundColor: `${hexValue}` }}
            onClick={() => {
                setAlert(true)
                navigator.clipboard.writeText(hex)
            }}
        >
            <p className='mb-0'>{weight}%</p>
            <p >{hexValue}</p>
            {alert && <p className='uppercase mt-2 text-sm'>copied to clipboard</p>}
        </article>
    )
}

export default SingleColor