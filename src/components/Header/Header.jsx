import { useState } from 'react'
import './Header.css'
import Burger from '@animated-burgers/burger-slip'
import '@animated-burgers/burger-slip/dist/styles.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState('')
    function HandleCloseMenu() {
        setIsOpen(!isOpen)
    }

    const navigation = [
        { title: "Início", href: "#home" },
        { title: "Sobre", href: "#about" },
        { title: "Recursos", href: "#features" },
        { title: "Preços", href: "#prices" },
        { title: "FAQ", href: "#details" },
    ];

    return (
        <header>
            <nav>
                <div className="logo"><img src="./logo.png" alt="logo-mark" width={40} /> <a href="">ChatFlow Solutions</a></div>

                <div className="mobile-menu"
                    onClick={() => setIsOpen(!isOpen)}>
                    <Burger isOpen={isOpen} />
                </div>

                <ul className={isOpen ? "mobile" : ""}>
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
