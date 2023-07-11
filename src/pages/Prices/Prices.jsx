import React from 'react'
import './Prices.css'
import { BsCheck } from 'react-icons/bs'

const Prices = () => {
    return (
        <section id='prices'>
            <div className='grid'>
                <h1>Come to the course that leaves you ready to create incredible pages</h1>
                <div className="prices-cards">
                    <div className="price-card">
                        <h1>Basic Plan</h1>
                        <h2> $99,<span>00</span></h2>
                        <ul>
                            <li><BsCheck />Access to course modules</li>
                            <li><BsCheck />Interactive study material</li>
                            <li><BsCheck />Email support</li>
                            <button>Buy</button>
                        </ul>
                    </div>

                    <div className="price-card">
                        <h1>Advanced Plan</h1>
                        <h2> $199,<span>00</span></h2>
                        <ul>
                            <li><BsCheck />All features from the Basic Plan</li>
                            <li><BsCheck />Additional hands-on projects</li>
                            <li><BsCheck />Live Q&A sessions with instructors</li>
                            <button>Buy</button>
                        </ul>
                    </div>

                    <div className="price-card">
                        <h1>Premium Plan</h1>
                        <h2> $299,<span>00</span></h2>
                        <ul>
                            <li><BsCheck />All features from the Advanced Plan</li>
                            <li><BsCheck />Individual performance evaluation</li>
                            <li><BsCheck />One-on-one mentoring sessions with instructors</li>
                            <button>Buy</button>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prices
