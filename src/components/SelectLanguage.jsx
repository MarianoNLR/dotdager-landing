import { useLanguage } from '../LanguageProvider.jsx'

export function SelectLanguage () {
    const {setLanguage} = useLanguage()
    return (
        <>
            <select name="select-language" id="select-language" onChange={event => setLanguage(event.target.value)}>
                <option value="es">Es</option>
                <option value="en">En</option>
            </select>
        </>
    )
}