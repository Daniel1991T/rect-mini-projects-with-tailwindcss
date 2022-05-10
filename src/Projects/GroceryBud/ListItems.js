import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const ListItems = ({ items, removeItem, editItem }) => {
    return (
        <>
            {items.map(item => {
                const { id, title } = item
                return (
                    <article key={id} className='flex items-center justify-between
                    mb-2 transition-all duration-300 ease-linear py-1 px-2
                    rounded capitalize hover:bg-gray-200 hover:text-gray-200'>
                        <p className='mb-0 text-cyan-700 tracking-[2px] 
                        transition-all duration-300 ease-linear'>{title}</p>
                        <div className='space-x-4 text-base'>
                            <button className='bg-transparent border-transparent
                            cursor-pointer  my-0 mx-[0.15rem] transition-all
                            duration-300 ease-linear text-green-600 hover:text-green-900'
                                onClick={() => editItem(id)}>
                                <FaEdit />
                            </button>
                            <button className='bg-transparent border-transparent
                            cursor-pointer my-0 mx-[0.15rem] transition-all
                            duration-300 ease-linear text-red-600 hover:text-red-900'
                                onClick={() => removeItem(id)}
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </article>
                )
            })}
        </>
    )
}

export default ListItems