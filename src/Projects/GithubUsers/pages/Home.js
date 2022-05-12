import React from 'react'
import SearchUsers from '../components/SearchUsers'
import UserList from '../components/UserList'

const Home = () => {
    return (
        <section className='flex flex-col justify-center items-center py-8'>
            <SearchUsers />
            <div className='divider text-cyan-300'></div>
            <UserList />
        </section>
    )
}

export default Home