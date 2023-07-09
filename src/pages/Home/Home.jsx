import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <section id='home'>
            <div className='grid'>
                <div className='content'>
                    <div className="text-container">
                        <h1>Unlock Your Potential with the Power of the Internet</h1>
                        <p>Experience the boundless opportunities of the internet and unleash your creativity. Discover a world of endless possibilities without limits or boundaries. Connect, explore, and engage with the global community at your fingertips.</p>
                        <button>Know More</button>
                    </div>

                    <div className="photo-container">
                        <img src="/background.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='logos'>
                <div className="logo-icon">
                    <img src="/logos/logo-zola.svg" alt="" />
                </div>
                <div className="logo-icon">
                    <img src="/logos/logo-agencywithin.svg" alt="" />
                </div>
                <div className="logo-icon">
                    <img src="/logos/logo-later.svg" alt="" />
                </div>
                <div className="logo-icon">
                    <img src="/logos/logo-fifty.svg" alt="" />
                </div>
                <div className="logo-icon">
                    <img src="/logos/logo-campaign-monitor.svg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Home
