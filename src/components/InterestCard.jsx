import '../styles/InterestCard.css'

export function InterestCard ({img, className, children}) {

    return (
        <>
            <div className={`interest-wrapper ${className} `}>
                <div className="interest-image-wrapper">
                    <img className="interest-image" src={img}  alt=""/>
                </div>
                <div className="interest-text">
                    {children}
                </div>
            </div>
        </>
    )
}