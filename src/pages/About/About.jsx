import React from 'react'
import './About.css'
import { Fade } from 'react-awesome-reveal';

const About = () => {
    return (
        <section id='about'>
            <div className="grid">
                <div className="text-container">
                    <Fade cascade direction='up' duration={700} triggerOnce>
                        <h1>Acreditamos que a automação é a chave para o crescimento e o sucesso dos negócios no mundo digital de hoje.

                        </h1>
                        <h1>
                            Nossas soluções são projetadas para simplificar processos, economizar tempo e recursos, e, o mais importante, aprimorar a experiência do cliente.
                            Com o poder da inteligência artificial, nossos chat bots avançados são capazes de responder a perguntas, fornecer informações valiosas, processar pedidos e muito mais, tudo de forma instantânea.</h1>

                        <h1>
                            Para lojas, pizzarias e empresas que buscam expandir sua presença online, nossa abordagem personalizada garante que cada chat bot seja adaptado às necessidades específicas de cada cliente. Criamos fluxos de conversação intuitivos que guiam os usuários de forma natural, resultando em conversas significativas e, acima de tudo, em clientes satisfeitos.
                        </h1>
                        <p><a href="#about" target='__blank'><b> ChatFlow Solutions</b></a></p>
                    </Fade>
                </div>
            </div>
        </section >
    )
}

export default About
