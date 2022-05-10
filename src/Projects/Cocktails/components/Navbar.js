import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
    return (
        <nav className='bg-mainWhite h-20 flex items-center border-2 border-solid 
        border-greenDark shadow-[2px_5px_3px_0px_rgba(0,_0,_0,_0.5)]'>
            <div className="flex justify-between items-center w-[85vw] my-0 mx-auto max-w-6xl">
                <Link to='/projects/cocktails/'>
                    <img src={logo} alt='cocktail db logo' className='w-48' />
                </Link>
                <ul className='flex items-center'>
                    <li>
                        <Link to='/projects/cocktails/' className='capitalize inline-block font-normal
                        mr-2 text-xl py-1 px-2 tracking-wider hover:text-greenDark' >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/projects/cocktails/about' className='capitalize inline-block font-normal
                        mr-2 text-xl py-1 px-2 tracking-wider hover:text-greenDark' >
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar