import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section className='flex justify-center py-20 px-0'>
            <div className="text-center capitalize">
                <h1>oops! it's a dead end</h1>
                <Link to='/projects/cocktails/' className='btn-cocktail btn-cocktail-primary'>
                    back home
                </Link>
            </div>
        </section>
    )
}

export default Error