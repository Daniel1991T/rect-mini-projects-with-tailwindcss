import React, { useState } from 'react'


const MenuList = ({ items }) => {

    return (
        <div className='w-[90vw] my-0 mx-auto max-w-6xl grid gap-y-12 gap-x-8 justify-center items-center lg:w-[95vw] lg:grid-cols-2'>
            {items.map(menuItem => {
                const { id, title, img, desc, price } = menuItem
                return <article key={id} className="grid gap-y-4 gap-x-8 max-w-sm 
                md:grid-cols-2 md:gap-y-0 md:gap-x-5 md:max-w-2xl">
                    <img src={img} alt={title} className="object-cover h-52 w-full border-[0.25rem] 
                    border-solid border-amber-400 block rounded md:h-36" />
                    <div className="">
                        <header className='flex justify-between border-b-[0.5px] border-dotted border-gray-500'>
                            <h4 className='mb-2 font-bold'>{title}</h4>
                            <h4 className='mb-2 text-amber-400'>${price}</h4>
                        </header>
                        <p className='mb-0 pt-4'>{desc}</p>
                    </div>
                </article>
            })}
        </div>
    )
}

export default MenuList