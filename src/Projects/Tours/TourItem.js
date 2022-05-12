import React, { useState } from 'react'

const TourItem = ({ id, image, info, price, name, removeTour }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className='bg-blue-50 rounded max-w-2xl mx-0 my-8 shadow-slate-100 shadow-md
        transition-all duration-300 ease-linear hover:shadow-gray-600'>
            <img className='w-full h-80 object-cover rounded-tr rounded-tl' src={image} alt={name} />
            <footer className='px-4 py-2'>
                <div className='flex justify-between items-center mb-6'>
                    <h4 className='mb-0 text-base font-bold text-black'>{name}</h4>
                    <h4 className='mb-0 text-base text-blue-500 font-bold bg-blue-100 px-2 py-1 rounded'>${price}</h4>
                </div>
                <p>{
                    readMore ? info : `${info.substring(0, 200)}... `}
                    <button className='bg-transparent border-transparent capitalize text-blue-500 text-base cursor-pointer pl-1' onClick={() => setReadMore(!readMore)}>
                        {readMore ? "Show Less" : "Read More"}
                    </button>
                </p>
                <button className='block w-52 mt-4 mr-auto mb-0 ml-auto text-red-800 bg-transparent
                tracking-wide capitalize border-[1px] border-solid border-red-800 px-2 py-1 rounded hover:border-red-500 hover:text-red-500' onClick={() => removeTour(id)}>
                    not interested
                </button>
            </footer>
        </article>
    )
}

export default TourItem