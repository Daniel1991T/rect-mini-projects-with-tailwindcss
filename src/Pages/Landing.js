import React from 'react'
import { SiReact } from 'react-icons/si'

const Landing = () => {
    return (
        <div className={`h-screen bg-no-repeat bg-cover flex flex-row items-center justify-center 
        bg-[url(https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)]`}
        >
            <div className=''>
                <div className='hover:border-b-4 p-2 rounded-br-md border-b-2
            border-amber-200 border-r-2 flex cursor-pointer'>
                    <h1 className='font-sans font-bold text-white text-2xl'>Learning and build more and more projects</h1>
                </div>
                <p className='text-amber-200 font-sans flex justify-center'>If you want to see my journey in learning React.js click on project button </p>
            </div>
        </div>
    )
}

export default Landing