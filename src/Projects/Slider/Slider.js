import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

const Slider = () => {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState('right')

    useEffect(() => {
        const lastIndex = people.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        } else if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, people])

    // in loc de primul useEffect putem folosi cele 2 functii 
    // pentru next and prev slider si inclocuim la cele doua butoane onClick cu cele 2 functii

    const nextSlider = () => {
        setIndex((oldIndex) => {
            let newIndex = oldIndex + 1
            if (newIndex > people.length - 1) {
                return 0
            }
            return newIndex
        })
    }

    const prevSlider = () => {
        setIndex((oldIndex) => {
            let newIndex = oldIndex - 1
            if (newIndex < 0) {
                return people.length - 1
            }
            return newIndex
        })
    }

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(direction === 'right' ? index + 1 : index - 1)
        }, 3000)
        return () => clearInterval(slider)
    }, [index])

    return (
        <main className="min-h-screen flex justify-center bg-slate-200">
            <section className='w-[90vw] my-20 max-w-6xl lg:w-[95vw]'>
                <div className='text-center mb-8'>
                    <h2 className='flex items-center justify-center font-medium'>
                        <span className='text-[.85em] text-amber-600 mr-4 font-semibold'>/</span> reviews
                    </h2>
                </div>
                <div className='my-0 mx-auto mt-16 w-[80vw] h-[450px] max-w-[800px] text-center relative flex '>
                    {
                        people.map((person, personIndex) => {
                            const { id, image, name, title, quote } = person
                            let position = 'translate-x-[100%] opacity-0'
                            if (personIndex === index) {
                                position = 'translate-x-[0%] opacity-100'
                            } else if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                                position = 'opacity-0 -translate-x-full'
                            }

                            return <article key={id} className={`absolute top-0 left-0 w-full h-full 
                            transition-all duration-300 ease-linear ${position}`}>
                                <img
                                    src={image}
                                    alt={name}
                                    className="rounded-full mb-4 w-40 h-40 my-0 mx-auto object-cover border-4 border-solid 
                                    border-gray-400 shadow-md shadow-gray-900" />
                                <h4 className='uppercase text-amber-600 mb-1'>{name}</h4>
                                <p className='capitalize text-gray-700 mb-3'>{title}</p>
                                <p className='max-w-[35em] my-0 mx-auto mt-8 text-gray-500'>{quote}</p>
                                <FaQuoteRight className='text-5xl mt-4 text-amber-600 my-0 mx-auto' />
                            </article>
                        })
                    }
                    <button className='left-0 absolute top-[200px] translate-y-[50%] bg-gray-500 text-white 
                    w-5 h-5 grid place-items-center border-transparent text-base rounded cursor-pointer transition-all 
                    duration-300 ease-linear hover:bg-amber-600'
                        onClick={() => {
                            setDirection('left')
                            setIndex(index - 1)
                        }}>
                        <FiChevronLeft />
                    </button>
                    <button className='right-0 absolute top-[200px] translate-y-[50%] bg-gray-500 text-white
                    w-5 h-5 grid place-items-center border-transparent text-base rounded cursor-pointer transition-all
                    duration-300 ease-linear hover:bg-amber-600'
                        onClick={() => {
                            setDirection('right')
                            setIndex(index + 1)
                        }}>
                        <FiChevronRight />
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Slider