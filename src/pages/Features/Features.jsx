import React from 'react'
import './Features.css'
const Features = () => {
    return (
        <section id='features'>
            <div className='grid'>
                <h1>Web development encompasses various skills and technologies used to create and maintain websites.</h1>
                <div className="demos">

                    <div className="card">
                        <div className="card-img">
                            <img src="/features/uidesign.png" alt="" />
                        </div>
                        <h1>UI Design</h1>
                        <p>
                            It is the visual and functional creation of digital interfaces, such as buttons, menus and colors, to make user interaction with a product or service easier.</p>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src="/features/motiondesign.png" alt="" />
                        </div>
                        <h1>Motion Design</h1>
                        <p>
                            It's the design that makes websites and apps automatically adjust to different devices and screen sizes, providing a good user experience no matter how they're accessing.</p>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src="/features/resdesign.png" alt="" />
                        </div>

                        <h1>Responsive Design</h1>
                        <p>
                            It is the creation of animated elements for digital interfaces, such as movements, transitions and visual effects, which help to communicate information, improve the user experience and make interaction more interesting.</p>
                    </div>

                </div>
            </div  >

        </section>
    )
}

export default Features
