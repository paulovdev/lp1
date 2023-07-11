import { useState } from 'react'
import './Header.css'
import { LiaBarsSolid } from 'react-icons/lia'
import { TfiClose } from 'react-icons/tfi'
const Header = () => {
    const [toggleMenu, setToogleMenu] = useState('')
    function HandleCloseMenu() {
        setToogleMenu(!toggleMenu)
    }

    const navigation = [
        { title: "Home", href: "#home" },
        { title: "About", href: "#about" },
        { title: "Features", href: "#features" },
        { title: "Pricing", href: "#prices" },
    ]
    return (
        <header>
            <nav>
                <div className="logo"><a href="https://pxulin.netlify.app/" target='__blank' >pxulin</a></div>
                <div className="mobile-menu"
                    onClick={() => setToogleMenu(!toggleMenu)}>
                    {toggleMenu
                        ? <button><TfiClose size={26} color='#000' /></button>
                        : <button><LiaBarsSolid size={32} color='#000' /></button>}

                </div>
                <ul className={toggleMenu ? "mobile" : ""}>
                    {navigation.map((nav) => (
                        <li key={nav.title} onClick={HandleCloseMenu}>
                            <a href={nav.href}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>

            </nav>
        </header >
    )
}

export default Header
