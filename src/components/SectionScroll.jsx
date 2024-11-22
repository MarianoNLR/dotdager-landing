import '../styles/SectionScroll.css'
import dotIcon from '../assets/icons/dot-small-svgrepo-com.svg'
import leftArrow from '../assets/left-arrow.svg'
import rightArrow from '../assets/right-arrow.svg'
import questionMark from '../assets/icons/question-mark.svg'
export function SectionScroll ({activeSection, setActiveSection, setLumberIsActive}) {

    const handleChangeSectionRight = () => {
        if (activeSection == 2) {
            setLumberIsActive(true)
            return
        }
        setActiveSection(prev => prev + 1)
        
    }

    const handleChangeSectionLeft = () => {
        setActiveSection(prev => prev - 1)
    }

    return (
        <div className='scroll-wrapper' style={{'--active-section': activeSection}}>
            <div className="scroll-main">
                <div className='section-button-wrapper'> 
                    <button type="button" className='section-button' onClick={handleChangeSectionLeft} disabled={activeSection == 0}><img src={leftArrow}></img></button>
                </div>
                {/* <img src={dotIcon} alt="" className='section-marker'/>
                <img src={dotIcon} alt="" className='section-marker'/>
                <img src={dotIcon} alt="" className='section-marker'/> */}
                <div className='markers-wrapper'>
                    <div className={`section-marker ${activeSection == 0 ? 'active' : ''}`}><span></span></div>
                    <div className={`section-marker ${activeSection == 1 ? 'active' : ''}`}><span></span></div>
                    <div className={`section-marker ${activeSection == 2 ? 'active' : ''}`}><span></span></div>
                </div>
                <div className='section-button-wrapper'>
                    <button type="button" className='section-button' onClick={handleChangeSectionRight}><img src={activeSection < 2 ? rightArrow : questionMark}></img></button>
                </div>
            </div>
        </div>
    )
}