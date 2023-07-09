import React from 'react'
import './About.css'
const About = () => {
    return (
        <section id='about'>
            <div className="grid">

                <div className="photo-container">
                    <img src="/pxulin.jpg" alt="" />
                </div>
                <div className="text-container">
                    <h1>"With the new website development tools at my disposal, I can efficiently create and evaluate landing pages. These user-friendly templates have significantly enhanced our conversion rates, resulting in almost a twofold increase in customer engagement."</h1>
                    <p> <b>Paulo Vitor</b>, Web Developer</p>
                </div>
            </div>
        </section>
    )
}

export default About
