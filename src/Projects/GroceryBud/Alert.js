import React, { useEffect } from 'react'

const Alert = ({ message, type, removeAlert, groceryList }) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert(false)
        }, 3000)
        return () => clearTimeout(timeout)
    }, [groceryList])

    return (
        <p className={`mb-4 h-5 grid items-center text-center text-xs rounded tracking-[0.1rem] capitalize 
        ${type === 'success' ? 'text-green-800 bg-green-200' : 'text-red-800 bg-red-200'}`}>{message}</p>
    )
}

export default Alert