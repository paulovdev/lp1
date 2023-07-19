import React from 'react';
import './Features.css';
import { Fade } from 'react-awesome-reveal';

const Features = () => {
    return (
        <section id='features'>
            <div className='grid'>
                <Fade cascade direction='down' duration={700} triggerOnce>
                    <h1>Alguns recursos que usamos</h1>
                </Fade>
                <div className="demos">
                    <Fade cascade direction='up' duration={930} triggerOnce>
                        <div className="card">
                            <div className="card-img">
                                <img src="/features/design.svg" alt="UI Design" />
                            </div>
                            <h1>Respostas Rápidas</h1>
                            <p>
                                Usamos tecnologia avançada para fornecer informações importantes em questão de segundos. Seja sobre produtos, horários de funcionamento ou respostas a perguntas frequentes, garantimos uma experiência ágil e confiável para todos os clientes.</p>
                        </div>

                        <div className="card">
                            <div className="card-img">
                                <img src="/features/motion.svg" alt="Motion Design" />
                            </div>
                            <h1>Atendimento Personalizado</h1>
                            <p>
                                Utilizamos um chat bot automatizado que oferece atendimento altamente personalizado para cada cliente. Ele analisa dados, histórico de interações e preferências do usuário para fornecer recomendações relevantes e respostas sob medida.</p>
                        </div>

                        <div className="card">
                            <div className="card-img">
                                <img src="/features/responsive.svg" alt="Responsive Design" />
                            </div>

                            <h1>Integração</h1>
                            <p>
                                Nosso chat bot automatizado se integra perfeitamente ao seu sistema atual, independentemente do canal de comunicação, site, redes sociais ou aplicativo. Ele coleta dados relevantes e garante consistência na experiência do cliente em todos os pontos de contato.</p>
                        </div>
                    </Fade>
                </div>

            </div>
        </section>
    );
};

export default Features;
