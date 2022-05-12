import React from 'react'
import ReviewContainer from './ReviewContainer'

const Reviews = () => {
    return (
        <main className='min-h-screen grid place-items-center bg-gray-100'>
            <section className='w-[80vh] max-w-screen-sm'>
                <div className='text-center mb-16'>
                    <h2 className='font-extrabold text-black'>our reviews</h2>
                    <div className='h-1 w-20 bg-blue-500 ml-auto mr-auto rounded'></div>
                </div>
                <ReviewContainer />
            </section>
        </main>
    )
}

export default Reviews