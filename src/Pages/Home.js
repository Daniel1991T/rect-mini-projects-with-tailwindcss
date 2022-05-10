import React, { useState } from 'react'
import Project from '../Components/Project';
import { projectData } from '../Data/projects.data';

const Home = () => {
    const [projects, setProjects] = useState(projectData);
    return (
        <main className='bg-gray-100 flex flex-col items-center'>
            <div className='bg-green-700 w-full h-28 flex flex-col items-center justify-center md:h-40'>
                <h1 className='text-xl text-yellow-100 md:text-5xl'>Mini React Projects</h1>
                <p className='text-white md:text-2xl'>Descriptions</p>
            </div>
            <section className='grid grid-cols-1 gap-3 md:grid md:grid-cols-2 
            md:mx-24 lg:grid-cols-3 sm:grid-cols-2 md:gap-6 md:p-6 mx-auto max-w-7xl w-[90%]'>
                {projects.map(project => <Project key={project.id} {...project} />)}
            </section>
        </main>
    )
}

export default Home;