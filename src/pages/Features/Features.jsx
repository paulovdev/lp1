import React from 'react';
import './Features.css';
import { Fade } from 'react-awesome-reveal';

const Features = () => {
    return (
        <section id='features'>
            <div className='grid'>
                <Fade cascade direction='down' duration={700} triggerOnce>
                    <h1>You will learn to create</h1>
                </Fade>
                <div className="demos">
                    <Fade cascade direction='up' duration={930} triggerOnce>
                        <div className="card">
                            <div className="card-img">
                                <img src="/features/design.svg" alt="UI Design" />
                            </div>
                            <h1>UI Design</h1>
                            <p>
                                UI Design involves creating visually appealing and functional digital interfaces, such as buttons, menus, and colors, to enhance user interaction with a product or service.</p>
                        </div>

                        <div className="card">
                            <div className="card-img">
                                <img src="/features/motion.svg" alt="Motion Design" />
                            </div>
                            <h1>Motion Design</h1>
                            <p>
                                Motion Design ensures that websites and apps adapt seamlessly to different devices and screen sizes, providing an optimal user experience regardless of how they access the content.</p>
                        </div>

                        <div className="card">
                            <div className="card-img">
                                <img src="/features/responsive.svg" alt="Responsive Design" />
                            </div>

                            <h1>Responsive Design</h1>
                            <p>
                                Responsive design focuses on creating dynamic elements for digital interfaces, including animations, transitions, and visual effects that communicate information effectively, improve the user experience.</p>
                        </div>
                    </Fade>
                </div>

            </div>
        </section>
    );
};

export default Features;
