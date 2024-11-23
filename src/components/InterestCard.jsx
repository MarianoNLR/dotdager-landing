import '../styles/InterestCard.css'
import {ReactSVG} from 'react-svg';

export function InterestCard ({img, className, children}) {

    return (
        <>
        
            <div className={`interest-wrapper ${className} `}>
                <div className="interest-image-wrapper">
                    {/* <ReactSVG src={img} className='interest-image' height={50} width={50}/> */}
                    <img className='interest-image-dager' src={img} alt="image" />
                </div>
                <div className="interest-text">
                    <p>{children}</p>
                </div>
            </div>
        </>
    )
}