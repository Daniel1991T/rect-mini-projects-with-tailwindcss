import React, { useState } from 'react'
import { data } from './data'
import List from './List';
const BirthdayRemainder = () => {
  const [people, setPeople] = useState(data);
  return (
    <main className='bg-purple-500 text-gray-800 text-sm flex justify-center items-center min-h-screen'>
      <section className='w-[90vw] mx-20 my-0 max-w-md bg-white px-6 py-8 shadow-slate-800 rounded'>
        <h3 className='font-normal mb-8 text-3xl'>{people.length} birthday today</h3>
        <List people={people} />
        <button className='text-white block w-full border-transparent bg-purple-500 mx-auto
        capitalize text-xl px-2 py-0 outline-1 outline-purple-400 tracking-[0.2rem] rounded
        ' onClick={() => { setPeople([]) }}>clear all</button>
      </section>
    </main>
  )
}

export default BirthdayRemainder