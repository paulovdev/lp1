import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section id='features'>
            <div className='grid'>
                <h1>You will learn to create</h1>
                <div className="demos">
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
                            Responsive Design focuses on creating dynamic elements for digital interfaces, incorporating animations, transitions, and visual effects that effectively communicate information, enhance user experience, and make interactions more engaging.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
