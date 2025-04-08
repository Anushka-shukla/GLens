import tata from '../assets/images/tata.png';

import '../components/styles/Card.css';




const Card = ({ imageSrc, cardText }) => {

    return (
        <div className='card-layout'>
            <div className='card-img-container'>
                <img src={tata} alt='card-img' />

                {/* <img src={imageSrc} alt='card-img' /> */}

            </div>

            <div className='card-text-container'>
                {/* {cardText} */}
                This superstar was Ratan Tata's closest friend, shared same room, went for picnics, listened songs together...
            </div>

        </div>
    )
}

export default Card;