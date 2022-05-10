import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({ name, path, image }) => {
    return (
        <Link to={path}>
            <article className='group cursor-pointer border rounded-lg overflow-hidden
        transition-transform duration-200 ease-in-out hover:scale-105'>
                <img className='w-full h-60 object-cover' src={image} alt={name} />
                <footer className='flex items-center justify-center'>
                    <h2>{name}</h2>
                </footer>
            </article>
        </Link>
    )
}

export default Project