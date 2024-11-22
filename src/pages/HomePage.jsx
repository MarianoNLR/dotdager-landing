import { useState } from 'react'
import channelIcon from '../assets/channel-icon.png'
import { SectionScroll } from '../components/SectionScroll'
import { InterestCard } from '../components/InterestCard.jsx'
import { Header } from '../components/Header.jsx'
import catsImage from '../assets/interests-images/cats-image.jpg'
import programmingImage from '../assets/interests-images/programming-image.jpg'
import philosophyImage from '../assets/interests-images/philosophy-image.png'
import IgIcon from '../assets/icons/instagram-svgrepo-com.svg'
import GitIcon from '../assets/icons/github-142-svgrepo-com.svg'
import YoutubeIcon from '../assets/icons/youtube-svgrepo-com.svg'

import '../styles/Home.css'
import ContactMeTyping from '../components/ContactMeTyping.jsx'

export default function HomePage () {
    const [activeSection, setActiveSection] = useState(0)

    return (
        <> 
            <Header></Header>
            <main className="main">
            
                <div className='main-content' style={{'--active-section': activeSection}}>
                    <section className={`home ${activeSection == 0 ? 'show' : 'hidden'}`} id='home'>
                        <div className='home-section-background'></div>
                        <div className='home-info-wrapper'>
                            <div className="home-text">
                                ¡Hola! Soy Dot Dager, un amante de la programación con un toque de humor. En mis videos comparto contenido informativo sobre el fascinante mundo del código, mezclando datos curiosos, análisis y risas. Mi objetivo es hacer que descubras la programación desde una perspectiva divertida y entretenida. ¡Acompáñame y disfrutemos del viaje juntos!
                            </div>
                            <div className="home-image">
                                <img className='channel-icon' src={channelIcon} alt="channel icon"/>
                            </div>
                        </div>
                    </section>
                    <section className={`about-me ${activeSection == 1 ? 'show' : 'hidden'}`} id='about-me'>
                    <div className='aboutme-section-background'></div>
                        <div className='main-aboutme'>
                            <h2>Mis Intereses</h2>
                                <div className='interests-list'>
                                <InterestCard img={catsImage} className={"first"}>
                                    Los gatos son pequeños filósofos de la naturaleza, maestros del descanso y la curiosidad. Con su andar elegante y mirada penetrante, nos enseñan a disfrutar del momento, a buscar lo desconocido y a encontrar placer en las cosas simples. Más allá de su independencia, crean vínculos profundos con quienes les rodean, recordándonos que el amor se expresa de mil maneras, incluso con un ronroneo.
                                </InterestCard>
                                <InterestCard img={programmingImage} className="second">
                                    La programación es más que escribir líneas de código; es el arte de resolver problemas y dar vida a ideas a través de la tecnología. Es un lenguaje universal que conecta la lógica con la creatividad, permitiéndonos construir herramientas, experiencias y soluciones para un mundo digital en constante evolución. Aprender a programar no solo nos enseña cómo funcionan las máquinas, sino también cómo pensar de manera estructurada e innovadora.
                                </InterestCard>
                                <InterestCard img={philosophyImage} className="third">
                                    La filosofía es el arte de cuestionar lo que damos por sentado y de explorar las grandes preguntas que moldean nuestra existencia. Nos invita a reflexionar sobre quiénes somos, de dónde venimos y hacia dónde vamos, desafiando nuestras creencias y expandiendo nuestra perspectiva del mundo. Es un viaje sin fin hacia la comprensión, que conecta el pensamiento lógico con la creatividad y nos ayuda a encontrar sentido en lo cotidiano. ¿Te atreves a pensar más allá?
                                </InterestCard>
                                {/* <InterestCard img={catsImage}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eaque. Porro facere autem ullam rem, fuga dolore, velit quas aperiam quia veritatis eum atque! Dicta recusandae facilis tempore! Rerum, labore.
                                    orem ipsum dolor sit amet consectetur, adipisicing elit. Non magnam quasi dicta ullam atque, minima inventore veritatis iusto nobis sit eveniet ad laudantium deserunt doloribus, maiores facilis architecto ipsum a?
                                </InterestCard>
                                <InterestCard img={catsImage}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eaque. Porro facere autem ullam rem, fuga dolore, velit quas aperiam quia veritatis eum atque! Dicta recusandae facilis tempore! Rerum, labore.
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non magnam quasi dicta ullam atque, minima inventore veritatis iusto nobis sit eveniet ad laudantium deserunt doloribus, maiores facilis architecto ipsum a?
                                </InterestCard>
                                <InterestCard img={catsImage}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eaque. Porro facere autem ullam rem, fuga dolore, velit quas aperiam quia veritatis eum atque! Dicta recusandae facilis tempore! Rerum, labore.
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non magnam quasi dicta ullam atque, minima inventore veritatis iusto nobis sit eveniet ad laudantium deserunt doloribus, maiores facilis architecto ipsum a?
                                </InterestCard> */}
                                </div>
                        </div>
                    </section>
                    <section className={`contact ${activeSection == 2 ? 'show' : 'hidden'}`} id='contact'>
                    <div className='contact-section-background'></div>
                    <div className='main-contact'>
                            <ContactMeTyping></ContactMeTyping>
                            {/* <h2 className='contact-title' id="contact-me-text"></h2> */}
                            <div className='social-wrapper'>
                                <a href="https://www.instagram.com/dager.32/" target='_blank'><img src={IgIcon} alt="" className='social-icon'/></a>
                                <a href="https://www.youtube.com/@DotDager"  target='_blank'><img src={YoutubeIcon} alt="" className='social-icon'/></a>
                                <a href="https://github.com/MarianoVilla"  target='_blank'><img src={GitIcon} alt="" className='social-icon'/></a>
                            </div>
                        </div>
                    </section>
                    <SectionScroll activeSection={activeSection} setActiveSection={setActiveSection}></SectionScroll>
                </div>
            </main>
        </>
    )
}