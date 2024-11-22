import '../styles/InterestCard.css'
import {ReactSVG} from 'react-svg';

export function InterestCard ({img, className, children}) {

    return (
        <>
        
            <div className={`interest-wrapper ${className} `}>
                <div className="interest-image-wrapper">
                    <ReactSVG src={img} className='interest-image' height={50} width={50}/>
                </div>
                <div className="interest-text">
                    {children}
                </div>
            </div>
        </>
    )
}