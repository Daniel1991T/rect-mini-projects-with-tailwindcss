import React, { useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import style from './NavbarCss'
import logo from './logo.svg'
import { links } from './data'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    return (
        <nav className={style.nav}>
            <div className={style.navCenter}>
                <img src={logo} alt="logo" className={style.logo} />
                <button className={style.navToggle}>
                    <FaBars />
                </button>
            </div>
            <div className={style.linksContainer} ref={linksContainerRef}>
                <ul className={style.links} ref={linksRef}>
                    {links.map(link => {
                        const { id, text, url } = link
                        return <li key={id}>
                            <a className={style.linksAnchor} href={url}>{text}</a>
                        </li>
                    })}
                </ul>
            </div>
        </nav>
    )
}


// const style = {
//     nav: 'bg- white shadow-[0_5px_15px_rgba(0, _0, _0, _0.1)]',
//     navCenter: 'flex items-center justify-between p-4',
//     navToggle: 'text-2xl text-blue-500 bg-transparent border-transparent cursor-pointer transition-all duration-300 ease-linear hover:text-blue-800 hover:rotate-90'
// }

export default Navbar