import overlay from '../assets/white-overlay.svg'
import hero from '../assets/hero-image-business-card.png'
import './Card.css'

function Card(){
    return(
        <>
            <div className="card-container">
                <div className='card-image'>
                <img src={hero} alt="" className='image-hero'/>
                


                </div>
                
            </div>

        </>
    )
}

export default Card