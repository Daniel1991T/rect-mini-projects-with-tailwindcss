import React, { useState } from 'react'
import Values from 'values.js';
import SingleColor from './SingleColor';

const ColorGenerator = () => {
    const [color, setColor] = useState("");
    const [error, setError] = useState(false);
    const [listColor, setListColor] = useState(new Values('#f15025').all(10))

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(false)
        try {
            let newColor = new Values(color).all(10)
            setListColor(newColor)
            console.log(newColor);
        } catch (error) {
            setError(true)
            console.log(error);
        }

    }

    return (
        <main className='bg-gray-300 min-h-screen'>
            <section className='px-20 py-0 text-center flex items-center
            h-[100px] pl-8 w-[90vw] my-0 mx-auto max-w-6xl'>
                <h3 className='mb-0 mr-8 text-cyan-700'>color generator</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder='#f15025'
                        className={`border-transparent py-2 px-4 text-base sm:text-xl 
                        rounded-tl rounded-bl outline-cyan-600 ${error ? 'border-2 border-solid border-red-600' : null}`}
                    />
                    <button type="submit"
                        className='bg-cyan-700 py-2 px-4 text-base sm:text-xl border-transparent
                        rounded-tr rounded-br capitalize text-white cursor-pointer'
                    >
                        submit
                    </button>
                </form>
            </section>
            <section className='grid min-h-[calc(100vh-100px)] grid-cols-[repeat(auto-fit,_minmax(223.23px,_1fr))] 
            grid-rows-[repeat(auto-fit,_minmax(96px,_1fr))]'>
                {listColor.map((color, index) => {
                    return (
                        <SingleColor
                            key={index}
                            {...color}
                            index={index}
                            hexColor={color.hex}
                        />
                    )
                })}
            </section>
        </main>
    )
}

export default ColorGenerator