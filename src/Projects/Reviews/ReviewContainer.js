import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const ReviewContainer = () => {
    const [index, setIndex] = useState(0)
    const { name, job, image, text } = people[index]

    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0
        }
        if (number < 0) {
            return people.length - 1
        }
        return number
    }

    const nextPerson = () => {
        setIndex(prevState => checkNumber(prevState + 1))
    }

    const prevPerson = () => {
        setIndex(prevState => checkNumber(prevState - 1))
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length)
        if (randomNumber === index) {
            --randomNumber
        }
        setIndex(checkNumber(randomNumber))
    }


    return (
        <article className='bg-blue-50 py-6 px-8 rounded shadow-md shadow-gray-300 hover:shadow-gray-700
        transition-all duration-300 ease-linear text-center'>
            <div className='relative w-40 h-40 rounded-full my-0 mx-auto mb-6 before:w-full 
            before:h-full before: bg-blue-300 before:absolute before:top-[-0.25rem] before:right-[-0.5rem] before:rounded-full content-none'>
                <img src={image} alt={name} className="block relative w-full h-full object-cover rounded-full" />
                <span className='absolute top-0 left-0 w-10 h-10 grid place-items-center rounded-full translate-y-[25%] bg-blue-300 text-white'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='mb-1 text-black'>{name}</h4>
            <p className='mb-2 uppercase text-blue-300 text-sm font-bold'>{job}</p>
            <p className='mb-3'>{text}</p>
            <div className='flex items-center justify-center'>
                <button className='prev-btn hover:text-blue-500' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='bg-blue-200 text-blue-400 capitalize rounded py-1 px-2
                transition-all duration-300 ease-linear border-transparent cursor-pointer 
                hover:bg-blue-400 hover:text-blue-600' onClick={randomPerson}>
                    surprise me
                </button>
                <button className='next-btn hover:text-blue-500' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
        </article>
    )
}

export default ReviewContainer;