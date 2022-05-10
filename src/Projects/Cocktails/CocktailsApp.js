import React from 'react'
import { AppProvider } from './context'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const CocktailsApp = () => {
  return (
    <main className='bg-mainBg min-h-screen'>
      <AppProvider>
        <Navbar />
        <Outlet />
      </AppProvider>
    </main>
  )
}

export default CocktailsApp;