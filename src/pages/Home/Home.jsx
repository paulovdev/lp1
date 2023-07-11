import React from 'react'
import './Home.css'
import { Fade } from 'react-awesome-reveal';

const Home = () => {
    return (
        <section id='home'>
            <div className='grid'>
                <div className='content'>

                    <div className="text-container">
                        <Fade cascade direction='down' duration={700} triggerOnce>
                            <h1>Learn to create amazing and functional websites from scratch.</h1>
                            <p>Our website development course provides you with the skills and knowledge needed to create professional websites. You'll be ready to master the latest web technologies and create stunning websites.</p>
                            <button>Know More</button>
                        </Fade>
                    </div>

                    <div className="photo-container">
                        <Fade direction='down' duration={1200} triggerOnce>
                            <img src="/background.svg" alt="" />
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
