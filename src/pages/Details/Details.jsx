import { useState } from 'react';
import './Details.css';
import { Fade } from 'react-awesome-reveal';
import { MdKeyboardArrowDown } from 'react-icons/md';

const details = [
    {
        title: "What is website creation?",
        desc: "Did you know that creating websites involves developing web pages for various purposes? Through creating websites, it is possible to establish an online presence, promote business, share information and interact with the public. With a combination of design , advanced functionality and a good user experience, the websites created can captivate and engage visitors. If you are looking for a personalized and professional website, website design is essential to achieve your online goals."
    },
    {
        title: "Create a tailored website for your business!",
        desc: "The creation of bespoke websites is essential to establish a unique and impactful digital presence. With a customized website, you can transmit your brand identity, highlight your products or services and gain the trust of your visitors. In addition, a well-designed and optimized website can boost your search engine visibility, making it easier for your target audience to find you online. Don't miss the opportunity to create a website that reflects the excellence of your business and drives your growth. a custom website today!"
    },
    {
        title: "Turn Your Ideas into Digital Reality",
        desc: "Website design is the starting point for turning your ideas into an impressive online presence. Whether you're an entrepreneur, freelancer or business, a well-designed website is essential to achieving your goals on the internet. With website design, you can show your work, promote your products, share your knowledge and establish connections with your target audience. Count on specialized professionals to create a unique, responsive and intuitive website that transmits your message effectively. Don't leave your ideas just in the paper, take them digitally by creating a high-quality, custom website."
    },
    {
        title: "Stand Out in the Digital Age",
        desc: "In the digital age we live in, having a website is essential to stand out in the market. Creating websites allows you to present your products, services and information professionally and accessible to anyone, anywhere in the world. With a well-structured website, you can attract new customers, strengthen your brand and expand your online presence. Don't miss the opportunity to capture the attention of your target audience and differentiate yourself from the competition. Invest in creating a modern, responsive and optimized to ensure the success of your business on the internet."
    },
];

const Details = () => {
    const [activeItem, setActiveItem] = useState('');

    const handleClick = (index) => {
        setActiveItem(index === activeItem ? '' : index);
    };

    return (
        <section id='details'>
            <div className='grid'>
                <Fade cascade direction='down' duration={700} triggerOnce>
                    <h1>Frequently asked questions</h1>
                </Fade>
                <div className="questions">
                    {details.map((item, index) => (
                        <Fade cascade direction='down' duration={500} delay={index * 300} triggerOnce>
                            <details key={index}>
                                <summary onClick={() => handleClick(index)}>
                                    {item.title}{' '}
                                    <MdKeyboardArrowDown
                                        size={32}
                                        className={index === activeItem ? "rotate" : ""}
                                    />
                                </summary>
                                <p>{item.desc}</p>
                            </details>
                        </Fade>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Details;
