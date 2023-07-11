import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <section id='home'>
            <div className='grid'>
                <div className='content'>
                    <div className="text-container">
                        <h1>Learn to create amazing and functional websites from scratch.</h1>
                        <p>Our website development course provides you with the skills and knowledge needed to create professional websites. You'll be ready to master the latest web technologies and create stunning websites.</p>
                        <button>Know More</button>
                    </div>

                    <div className="photo-container">
                        <img src="/background.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
