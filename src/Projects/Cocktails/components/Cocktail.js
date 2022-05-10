import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, image, name, info, glass }) => {
    return (
        <article className='bg-mainWhite mb-8 grid grid-rows-[auto_1f] rounded transition-all duration-300 ease-linear
        shadow-[2px_5px_3px_0px_rgba(0,_0,_0,_0.5)] hover:shadow-[4px_10px_5px_0px_rgba(0,_0,_0,_0.5)] '>
            <div className="img-container">
                <img src={image} alt={name} className="h-80 object-cover rounded-t w-full block" />
            </div>
            <div className="p-6">
                <h3 className='mb-1 text-4xl'>{name}</h3>
                <h4 className='mb-1'>{glass}</h4>
                <p className='text-darkGrey mb-2'>{info}</p>
                <Link to={`/projects/cocktails/cocktail/${id}`} className="btn-cocktail  btn-cocktail-detail btn-cocktail-primary" >
                    detail
                </Link>
            </div>
        </article>
    )
}

export default Cocktail