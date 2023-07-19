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
                            <h1>ChatFlow Solutions</h1>
                            <p>Impulsione suas conversas com chat bots inteligentes e fluxos otimizados</p>
                            <button>Saber mais</button>
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
