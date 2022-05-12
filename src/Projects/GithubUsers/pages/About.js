import React from 'react'

const About = () => {
    return (
        <section className='flex flex-col items-center p-4 h-[90%] space-y-6'>
            <h1 className='text-mainWhite text-6xl font-normal mb-4'>Github Finder</h1>
            <p className='mb-4 text-2xl font-light max-w-6xl'>This is a React.js project, where I used and learn
                <strong> useContext with useReducer, fetch data from API with axios where I create my own axios with
                    interceptors to add to request headers authorization prop my github token!</strong></p>
            <p>To see the github repositorie visit next
                <a className='link text-cyan-600 ml-2' href="https://github.com/Daniel1991T/rect-mini-projects-with-tailwindcss/tree/main/src/Projects/GithubUsers">
                    link</a></p>
        </section>
    )
}

export default About