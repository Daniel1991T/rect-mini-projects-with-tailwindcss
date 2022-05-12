import React from 'react'
import { useGithubContext } from '../context/context'

const Alert = () => {
    const { error } = useGithubContext()

    return (
        <div
            className={`grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 ml-24 mb-4 
            transition-all duration-300 ease-linear 
            ${error ? 'display' : 'hidden'}`}
        >
            <div className='alert alert-error'>
                <div>
                    <svg
                        fill='none'
                        viewBox='0 0 24 24'
                        className='w-6 h-6 stroke-current mr-3'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
                        ></path>
                    </svg>
                    <strong>{error}</strong>
                </div>
            </div>
        </div>
    )
}

export default Alert