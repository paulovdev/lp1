import React from 'react'
import './Prices.css'
import { Fade } from 'react-awesome-reveal';
import { BsCheck } from 'react-icons/bs'
import { IoIosClose } from 'react-icons/io'

const Prices = () => {
    return (
        <section id='prices'>
            <div className='grid'>
                <Fade cascade direction='down' duration={800} triggerOnce>
                    <h1>Come to the course that leaves you ready to create incredible pages</h1>
                </Fade>
                <div className="prices-cards">
                    <Fade cascade direction='up' duration={900} triggerOnce>
                        <div className="price-card">
                            <h1>Basic </h1>
                            <h2> $49,<span>99</span></h2>
                            <ul>
                                <li><BsCheck size={26} color='#15b015' />Access to course modules</li>
                                <li><BsCheck size={26} color='#15b015' />Interactive study material</li>
                                <li><BsCheck size={26} color='#15b015' />Email support</li>
                                <li><IoIosClose size={26} color='#ff3333' />Additional hands-on projects</li>
                                <li><IoIosClose size={26} color='#ff3333' />Live Q&A sessions with instructors</li>
                                <li><IoIosClose size={26} color='#ff3333' />Individual performance evaluation</li>
                                <li><IoIosClose size={26} color='#ff3333' />One-on-one mentoring sessions </li>
                                <button>SELECT</button>
                            </ul>
                        </div>

                        <div className="price-card">
                            <h1>Advanced </h1>
                            <h2> $99,<span>99</span></h2>
                            <ul>
                                <li><BsCheck size={26} color='#15b015' />Access to course modules</li>
                                <li><BsCheck size={26} color='#15b015' />Interactive study material</li>
                                <li><BsCheck size={26} color='#15b015' />Email support</li>
                                <li><BsCheck size={26} color='#15b015' />Additional hands-on projects</li>
                                <li><BsCheck size={26} color='#15b015' />Live Q&A sessions with instructors</li>
                                <li><IoIosClose size={26} color='#ff3333' />Individual performance evaluation</li>
                                <li><IoIosClose size={26} color='#ff3333' />One-on-one mentoring sessions</li>
                                <button>SELECT</button>
                            </ul>
                        </div>

                        <div className="price-card">
                            <h1>Premium </h1>
                            <h2> $149,<span>99</span></h2>
                            <ul>
                                <li><BsCheck size={26} color='#15b015' />Access to course modules</li>
                                <li><BsCheck size={26} color='#15b015' />Interactive study material</li>
                                <li><BsCheck size={26} color='#15b015' />Email support</li>
                                <li><BsCheck size={26} color='#15b015' />Additional hands-on projects</li>
                                <li><BsCheck size={26} color='#15b015' />Live Q&A sessions with instructors</li>
                                <li><BsCheck size={26} color='#15b015' />Individual performance evaluation</li>
                                <li><BsCheck size={26} color='#15b015' />One-on-one mentoring sessions</li>
                                <button>SELECT</button>
                            </ul>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default Prices
