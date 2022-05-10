import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import axios from 'axios';
import ToursList from './ToursList';
const URL = 'https://course-api.com/react-tours-project'

const Tours = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTours()
    }, [])

    const getTours = async () => {
        setLoading(true)
        try {
            const { data: response } = await axios.get(URL);
            console.log(response);
            setTours(response);
        } catch (error) {
            console.error(error)
        }
        setLoading(false);
    }

    const removeTour = (id) => {
        setTours(prevState => {
            return prevState.filter(tour => tour.id !== id)
        })
    }

    if (loading) {
        return <Loading />
    }
    if (tours.length === 0) {
        return <main className='w-full h-screen flex flex-col items-center bg-blue-100  my-auto'>
            <div className='text-center mt-16'>
                <h2 className='text-4xl'>no tours left</h2>
                <button className='bg-blue-500 inline-block px-2 py-1 rounded capitalize text-white 
                tracking-wide border-transparent cursor-pointer mt-8 text-xl' onClick={getTours}>refresh</button>
            </div>
        </main>
    }

    return (
        <main className='w-full min-h-screen flex justify-center items-center my-auto bg-blue-100'>
            <ToursList tours={tours} removeTour={removeTour} />
        </main>
    )
}

export default Tours