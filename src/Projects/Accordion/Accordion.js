import React from 'react'
import questions from './data'
import Question from './Question'

const Accordion = () => {
    return (
        <main className='bg-purple-700 min-h-screen flex items-center justify-center'>
            <section className=' bg-gray-100 w-[90vh] my-20 mx-auto
            py-8 px-4 max-w-5xl flex flex-col lg:flex-row items-start'>
                <h3 className='pr-2 text-black'>questions and answers about login</h3>
                <div>
                    {questions.map((question) => {
                        return <Question key={question.id} {...question} />
                    })}
                </div>
            </section>
        </main>
    )
}

export default Accordion