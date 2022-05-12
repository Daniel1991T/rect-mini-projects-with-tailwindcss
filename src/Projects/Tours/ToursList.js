import React from 'react'
import TourItem from './TourItem'

const ToursList = ({ tours, removeTour }) => {
    return (
        <section className='w-[90vw] mx-0 my-auto max-w-6xl lg:w-[95vw] bg-blue-100 items-center justify-center flex flex-col'>
            <div className="text-center my-12">
                <h2 className='text-4xl text-black'>Our tours</h2>
                <div className='w-24 h-1 bg-blue-600 ml-auto mr-auto rounded'></div>
            </div>
            <div>
                {tours.map(tour => {
                    return <TourItem key={tour.id} {...tour} removeTour={removeTour} />
                })}
            </div>
        </section>
    )
}

export default ToursList