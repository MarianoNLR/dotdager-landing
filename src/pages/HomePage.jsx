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

export default function HomePage () {
    const [activeSection, setActiveSection] = useState(0)

    return (
        <> 
            <Header></Header>
            <main className="main">
            
                <div className='main-content' style={{'--active-section': activeSection}}>
                    <section className={`home ${activeSection == 0 ? 'show' : 'hidden'}`} id='home'>
                        <div className='home-section-background'></div>
                        <div className="home-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis aspernatur nihil quas facilis et, quasi alias amet soluta dicta eos blanditiis incidunt. Nostrum necessitatibus provident ipsa amet obcaecati omnis.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ipsum nostrum mollitia expedita unde minus, vel omnis quae possimus error optio nisi! Molestiae sed esse fugit voluptatibus soluta quam. Inventore.
                        </div>
                        <div className="home-image">
                            <img className='channel-icon' src={channelIcon} alt="channel icon"/>
                        </div>
                    </section>
                    <section className={`about-me ${activeSection == 1 ? 'show' : 'hidden'}`} id='about-me'>
                    <div className='aboutme-section-background'></div>
                        <div className='main-aboutme'>
                            <InterestCard img={catsImage} className={"first"}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eaque. Porro facere autem ullam rem, fuga dolore, velit quas aperiam quia veritatis eum atque! Dicta recusandae facilis tempore! Rerum, labore.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non magnam quasi dicta ullam atque, minima inventore veritatis iusto nobis sit eveniet ad laudantium deserunt doloribus, maiores facilis architecto ipsum a?
                            </InterestCard>
                            <InterestCard img={programmingImage} className="second">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eaque. Porro facere autem ullam rem, fuga dolore, velit quas aperiam quia veritatis eum atque! Dicta recusandae facilis tempore! Rerum, labore.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non magnam quasi dicta ullam atque, minima inventore veritatis iusto nobis sit eveniet ad laudantium deserunt doloribus, maiores facilis architecto ipsum a?
                            </InterestCard>
                            <InterestCard img={philosophyImage} className="third">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eaque. Porro facere autem ullam rem, fuga dolore, velit quas aperiam quia veritatis eum atque! Dicta recusandae facilis tempore! Rerum, labore.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non magnam quasi dicta ullam atque, minima inventore veritatis iusto nobis sit eveniet ad laudantium deserunt doloribus, maiores facilis architecto ipsum a?
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
                    </section>
                    <section className={`contact ${activeSection == 2 ? 'show' : 'hidden'}`} id='contact'>
                    <div className='contact-section-background'></div>
                    <div className='main-contact'>
                            <h2 className='contact-title'>Contact Me</h2>
                            <div className='social-wrapper'>
                                <img src={IgIcon} alt="" className='social-icon'/>
                                <img src={YoutubeIcon} alt="" className='social-icon'/>
                                <img src={GitIcon} alt="" className='social-icon'/>
                            </div>
                        </div>
                    </section>
                    <SectionScroll activeSection={activeSection} setActiveSection={setActiveSection}></SectionScroll>
                </div>
            </main>
        </>
    )
}