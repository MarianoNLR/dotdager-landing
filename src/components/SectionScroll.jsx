import '../styles/SectionScroll.css'
import dotIcon from '../assets/icons/dot-small-svgrepo-com.svg'
export function SectionScroll ({activeSection, setActiveSection}) {

    const handleChangeSectionRight = () => {
        
        setActiveSection(prev => prev + 1)
        console.log(activeSection)
    }

    const handleChangeSectionLeft = () => {
        
        setActiveSection(prev => prev - 1)
        console.log(activeSection)
    }

    return (
        <div className='scroll-wrapper' style={{'--active-section': activeSection}}>
            <div className="scroll-main">
                <div className='section-button-wrapper'>
                    <button type="button" className='section-button' onClick={handleChangeSectionLeft} disabled={activeSection == 0}>←</button>
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
                    <button type="button" className='section-button' onClick={handleChangeSectionRight} disabled={activeSection == 2}>→</button>
                </div>
            </div>
        </div>
    )
}