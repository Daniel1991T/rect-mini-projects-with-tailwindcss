import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { HomeCocktail } from './pages'

const ShareLayout = () => {
    return (
        <main className='text-mainBlack bg-mainBg text-base font-light'>
            <Navbar />
            <Outlet />
        </main>
    )
}

export default ShareLayout