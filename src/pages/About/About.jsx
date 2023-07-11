import React from 'react'
import './About.css'
import { Fade } from 'react-awesome-reveal';

const About = () => {
    return (
        <section id='about'>
            <div className="grid">

                <div className="photo-container">
                    <Fade cascade direction='left' duration={700} triggerOnce>
                        <img src="/pxulin.jpg" alt="" />
                    </Fade>
                </div>
                <div className="text-container">
                    <Fade cascade direction='up' duration={700} triggerOnce>
                        <h1>"This course is suitable for anyone who wants to make web pages from scratch, perfecting themselves time and time and reaching spectacular levels, learning about many things, doing and many, many challenges."</h1>
                        <p> <a href="https://pxulin.netlify.app/" target='__blank'><b> Paulo Vitor</b></a>, Web Developer</p>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default About
