import { useState } from 'react'
import channelIcon from '../assets/channel-icon.png'
import { SectionScroll } from '../components/SectionScroll'
import { InterestCard } from '../components/InterestCard.jsx'
import { Header } from '../components/Header.jsx'
import catsIcon from '../assets/interests-images/cat-icon.svg'
import codingIcon from '../assets/interests-images/coding-icon.svg'
import philosophyIcon from '../assets/interests-images/philosophy-svgrepo-com.svg'
import IgIcon from '../assets/icons/instagram-svgrepo-com.svg'
import GitIcon from '../assets/icons/github-142-svgrepo-com.svg'
import YoutubeIcon from '../assets/icons/youtube-svgrepo-com.svg'
import ArrowDownIcon from '../assets/icons/arrow-down.svg'
import ArrowUpIcon from '../assets/icons/arrow-up.svg'
import {ReactSVG} from 'react-svg';
import '../styles/Home.css'
import TypingEffect from '../components/TypingEffect.jsx'
import { useLanguage } from '../LanguageProvider.jsx'
import { VerticalSwapButton } from '../components/VerticalSwapButton.jsx'
import '../styles/VerticalSwapButton.css'
export default function HomePage () {
    const [activeSection, setActiveSection] = useState(0)
    const {language, setLanguage, texts} = useLanguage()

    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);

    return (
        <> 
            <Header setActiveSection={setActiveSection}></Header>
            <main className="main">
               
                <div className='main-content' style={{'--active-section': activeSection}}>
                    
                    <section className={`home ${activeSection == 0 ? 'show' : 'hidden'}`} id='home'>
                        <div className='home-section-background'></div>
                        <div className='home-info-wrapper'>
                            <div className="home-text">
                                {/* ¡Hola! Soy Dot Dager, un amante de la programación con un toque de humor. En mis videos comparto contenido informativo sobre el fascinante mundo del código, mezclando datos curiosos, análisis y risas. Mi objetivo es hacer que descubras la programación desde una perspectiva divertida y entretenida. ¡Acompáñame y disfrutemos del viaje juntos! */}
                                {texts[language].homeMainText}
                            </div>
                            <div className="home-image">
                                <img className='channel-icon' src={channelIcon} alt="channel icon"/>
                            </div>
                        </div>
                        <VerticalSwapButton icon={ArrowDownIcon} setActiveSection={setActiveSection} value={1} className={'next'}>Next</VerticalSwapButton>
                    </section>
                    <section className={`about-me ${activeSection == 1 ? 'show' : 'hidden'}`} id='about-me'>
                        <VerticalSwapButton icon={ArrowUpIcon} setActiveSection={setActiveSection} value={0} className='prev'>Prev</VerticalSwapButton>
                        <div className='aboutme-section-background'></div>
                            <div className='main-aboutme'>
                                <TypingEffect text={texts[language].aboutMeTitle} fontSize={"4rem"}></TypingEffect>
                                    <div className='interests-list'>
                                        <InterestCard img={catsIcon} className={`first ${activeSection == 1 ? 'visible' : 'hidden'}`}>
                                            {texts[language].aboutMeCats}
                                        </InterestCard>
                                        <InterestCard img={codingIcon} className={`second ${activeSection == 1 ? 'visible' : 'hidden'}`}>
                                            {texts[language].aboutMeProgramming}
                                        </InterestCard>
                                        <InterestCard img={philosophyIcon} className={`third ${activeSection == 1 ? 'visible' : 'hidden'}`}>
                                            {texts[language].aboutMePhilosophy}
                                        </InterestCard>
                                    </div>
                            </div>
                        <VerticalSwapButton icon={ArrowDownIcon} setActiveSection={setActiveSection} value={1} className={'next'}>Next</VerticalSwapButton>
                    </section>
                    <section className={`contact ${activeSection == 2 ? 'show' : 'hidden'}`} id='contact'>
                    <VerticalSwapButton icon={ArrowUpIcon} setActiveSection={setActiveSection} value={0} className='prev'>Prev</VerticalSwapButton>
                    <div className='contact-section-background'></div>
                    <div className='main-contact'>
                            <TypingEffect text={texts[language].contactMeTitle} fontSize={"4rem"}></TypingEffect>
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