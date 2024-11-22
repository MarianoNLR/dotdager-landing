import '../styles/Header.css'
import { useLanguage } from '../LanguageProvider.jsx'
import { SelectLanguage } from './SelectLanguage'
export function Header () {
    const {setLanguage} = useLanguage()
    return (
        <header>
            <span>Dot Dager</span>
            <SelectLanguage></SelectLanguage>
        </header>
    )
}