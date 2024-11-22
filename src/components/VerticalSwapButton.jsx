import { ReactSVG } from "react-svg"
import '../styles/VerticalSwapButton.css'
export function VerticalSwapButton ({icon, value, setActiveSection, className, children}) {
    const changeActiveSection = () => {
        if (value === 1) {
            setActiveSection(prev => prev + 1)
        } 
        else {
            setActiveSection(prev => prev - 1)
        }
        
    }

    return (
            <div className={`vertical-swap-button-wrapper-${className}`} >
                <button 
                className={`vertical-swap-button`} 
                type="button"
                onClick={changeActiveSection} >
                <ReactSVG src={icon} />
                </button>
            </div>
    )
}