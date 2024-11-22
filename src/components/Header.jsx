import '../styles/Header.css'
import { useLanguage } from '../LanguageProvider.jsx'
import { SelectLanguage } from './SelectLanguage.jsx'
export function Header ({setActiveSection}) {
    return (
        <header>
            <div onClick={() => setActiveSection(0)} className='header-title'><span>Dot Dager</span></div>
            <SelectLanguage></SelectLanguage>
        </header>
    )
}