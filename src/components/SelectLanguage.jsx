import { useLanguage } from '../LanguageProvider.jsx'
import LanguageIcon from '../assets/icons/language-icon.svg'
import AnchorDown from '../assets/icons/anchor-down.svg'
import { ReactSVG } from 'react-svg'
import '../styles/SelectLanguage.css'
import { useState, useEffect, useRef  } from 'react'

export function SelectLanguage () {
    const {setLanguage} = useLanguage()
    const [isSelectorOpen, setIsSelectorOpen] = useState(false)
    const divRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (divRef.current && !divRef.current.contains(event.target) && 
            buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsSelectorOpen(false)
        }
        };
    
        document.addEventListener('mousedown', handleClickOutside)
    
        
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        };
      }, []);

    const handleOnClick = () => {
        setIsSelectorOpen(prev => !prev)
        console.log(isSelectorOpen)
    }

    return (
        <div className='select-language-wrapper'>
            <button ref={buttonRef}  className='select-language'
            onClick={() => handleOnClick()}>
                <ReactSVG src={LanguageIcon}></ReactSVG>
                <ReactSVG src={AnchorDown}></ReactSVG>
                </button>
            {/* <select name="select-language" id="select-language" onChange={event => setLanguage(event.target.value)}>
                <option value="es">Es</option>
                <option value="en">En</option>
            </select> */}
            {!isSelectorOpen ? 
            null : 
            <div ref={divRef} className={`languages-options-wrapper ${isSelectorOpen ? 'open' : 'closed'}`}>
                <div className='language-option es' onClick={() => setLanguage('es')}>Es</div>
                <div className='language-option en'onClick={() => setLanguage('en')}>En</div>
            </div>}
            
        </div>
    )
}