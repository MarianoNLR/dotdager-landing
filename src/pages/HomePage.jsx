import { useState, useEffect, useRef } from 'react'
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
import QuestionMark from '../assets/icons/question-mark.svg'
import {ReactSVG} from 'react-svg';
import '../styles/Home.css'
import TypingEffect from '../components/TypingEffect.jsx'
import { useLanguage } from '../LanguageProvider.jsx'
import { VerticalSwapButton } from '../components/VerticalSwapButton.jsx'
import '../styles/VerticalSwapButton.css'
export default function HomePage () {
    const [activeSection, setActiveSection] = useState(null)
    const {language, setLanguage, texts} = useLanguage()
    const [lumberIsActive, setLumberIsActive] = useState(false)

    useEffect(() => {
        // Activar animación al cargar la página
        const timer = setTimeout(() => {
          setActiveSection(0);
        }, 100); // Agregar un pequeño retraso opcional
    
        return () => clearTimeout(timer); // Limpiar si se desmonta
      }, []);

    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);

    const closeLumberJack = () => {
        setLumberIsActive(false)

    }

    return (
        <> 
            <Header setActiveSection={setActiveSection}></Header>
            <main className="main">
               
                <div className='main-content' style={{'--active-section': activeSection}}>
                    
                    <section className={`home ${activeSection == 0 ? 'show' : 'hidden'}`} id='home'>
                        <div className='home-section-background'></div>
                        <div className='home-info-wrapper'>
                            <div className="home-text">
                                <span className='home-text-greeting'>
                                    {texts[language].homeMainTextGreeting}
                                </span>
                                <span className='home-text-names'>
                                    <TypingEffect 
                                    text={[texts[language].homeMainTextSocialName,
                                    texts[language].homeMainTextRealName]}
                                    typeSpeed={150}
                                    backSpeed={100}
                                    >
                                    </TypingEffect>
                                </span>
                                {/* <span className='home-text-name'>{texts[language].homeMainTextSocialName}</span> */}
                                <p>{texts[language].homeMainText}</p>
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
                                <span className='about-me-title'>
                                    <TypingEffect text={[texts[language].aboutMeTitle]} typeSpeed={150} backSpeed={100}></TypingEffect>
                                </span>
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
                            <TypingEffect text={[texts[language].contactMeTitle]} fontSize={"4rem"} typeSpeed={150} backSpeed={100}></TypingEffect>
                            {/* <h2 className='contact-title' id="contact-me-text"></h2> */}
                            <div className='social-wrapper'>
                                <a href="https://www.instagram.com/dager.32/" target='_blank'><img src={IgIcon} alt="" className='social-icon ig'/></a>
                                <a href="https://www.youtube.com/@DotDager"  target='_blank'><img src={YoutubeIcon} alt="" className='social-icon youtube'/></a>
                                <a href="https://github.com/MarianoVilla"  target='_blank'><img src={GitIcon} alt="" className='social-icon git'/></a>
                            </div>
                        </div>
                        <VerticalSwapButton icon={QuestionMark} setActiveSection={setActiveSection} value={2} className={'next'} setLumberIsActive={setLumberIsActive}>Next</VerticalSwapButton>
                    </section>
                    <SectionScroll activeSection={activeSection} 
                    setActiveSection={setActiveSection}
                    setLumberIsActive={setLumberIsActive}></SectionScroll>
                </div>
                <div 
                
                className={`lumber-jack-container ${lumberIsActive ? 'lumber-active' : 'lumber-inactive'}`}>
                    <iframe src="https://tbot.xyz/lumber/" allowFullScreen></iframe>
                    <div className='close-lumber' onClick={() => closeLumberJack()}>x</div>
                </div>
            </main>
        </>
    )
}