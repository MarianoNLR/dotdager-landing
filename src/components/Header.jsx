import '../styles/Header.css'
import { useLanguage } from '../LanguageProvider.jsx'
import { SelectLanguage } from './SelectLanguage'
export function Header ({setActiveSection}) {
    const {setLanguage} = useLanguage()
    return (
        <header>
            <span onClick={() => setActiveSection(0)} className='header-title'>Dot Dager</span>
            <SelectLanguage></SelectLanguage>
        </header>
    )
}