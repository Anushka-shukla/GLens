import './styles/ImageResultCard.css';

const ImageResultCard = ({ imageFound, websiteIcon, websiteText, websiteIconText }) => {
    return (

        <div className='search-card'>
            <img src={imageFound} alt="image-a" className='searchedImg'/>
            <div className='card-info'>
                <div className='website-icon'>
                    <div className='row-text'>
                        <img src={websiteIcon} alt="imageSearch" className='card-info-img'/>
                    </div>
                    <div className='website-icon-text'>
                    {websiteIconText}
                    </div>
                </div>
                <div className='webiste-text'>
                {websiteText}
                   
                </div>
            </div>
        </div>
    )
}

export default ImageResultCard;