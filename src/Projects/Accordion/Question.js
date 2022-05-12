import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className='flex bg-white flex-col w-full rounded shadow-md shadow-yellow-50 my-2 p-2'>
            <div className='flex flex-row items-center justify-between'>
                <h3 className='text-black'>{title}</h3>
                <button className='bg-gray-300 p-2 text-red-500 border-transparent rounded-full'
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            {expanded && <p>
                {info}
            </p>}
        </div>
    )
}

export default Question