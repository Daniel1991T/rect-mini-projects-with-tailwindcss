import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import axios from 'axios'
import data from './data'

const URL = 'https://course-api.com/react-tabs-project'

const Tabs = () => {
    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState(data);
    const [value, setValue] = useState(0);

    // useEffect(() => {
    //     fetchJobs()
    // }, [])

    // const fetchJobs = async () => {
    //     setLoading(true)
    //     try {
    //         const { data: response } = await axios.get(URL);
    //         console.log(response);
    //         setJobs(response);
    //     } catch (error) {
    //         console.error(error)
    //     }
    //     setLoading(false);
    // }

    if (loading) {
        return (
            <section className='w-[90vw] my-20 max-w-6xl text-center lg:w-[95vw]'>
                <h1>loading...</h1>
            </section>
        )
    }
    const { company, dates, duties, title } = jobs[value]

    return (
        <main className='bg-slate-200 min-h-screen flex justify-center'>
            <section className='w-[90vw] py-20 max-w-6xl text-center lg:w-[95vw] '>
                <div className='mb-16 text-center'>
                    <h2 className='font-extrabold'>experience</h2>
                    <div className='underline bg-cyan-600'></div>
                </div>
                <div className='w-[80vw] my-0 mx-auto max-w-6xl flex flex-col md:flex-row'>
                    {/* btn container */}
                    <div className='flex flex-row justify-center mb-16 flex-wrap md:flex-col md:justify-start md:px-3 md:mr-8'>
                        {jobs.map((item, index) => {
                            return (
                                <button key={item.id} onClick={() => setValue(index)}
                                    className={`bg-transparent border-transparent capitalize text-xl tracking-wide my-0 mx-2
                                    transition-all duration-300 ease-linear cursor-pointer py-1 px-0 leading-4 
                                    outline-cyan-900 hover:text-cyan-600 hover:shadow-[0_2px] hover:shadow-cyan-500 md:my-2 
                                    ${index === value && 'shadow-[0_2px] shadow-cyan-500 text-cyan-900'}`}
                                >
                                    {item.company}
                                </button>
                            )
                        })}
                    </div>
                    {/* job info */}
                    <article className='text-left'>
                        <h3 className='font-normal'>{title}</h3>
                        <h4 className='uppercase text-gray-500 bg-gray-900
                        inline-block py-1 px-3 rounded
                        '>{company}</h4>
                        <p className='tracking-wide'>{dates}</p>
                        {duties.map((duty, index) => {
                            return (
                                <div key={index} className='flex flex-row items-center my-4'>
                                    <FaAngleDoubleRight className='text-cyan-600 mr-3' />
                                    <p className='text-left mb-0 text-gray-600'>{duty}</p>
                                </div>
                            )
                        })}
                    </article>
                </div>
                <button className='uppercase bg-cyan-600 text-cyan-200 py-1 px-3 
                font-bold tracking-wide transition-all
                duration-300 ease-linear text-sm border-2 border-solid border-transparent 
                cursor-pointer shadow shadow-slate-500 rounded block w-48 text-center 
                my-0 mx-auto mt-12 hover:bg-cyan-200 hover:text-cyan-800'
                    type='button'>more info</button>
            </section>
        </main>
    )
}

export default Tabs