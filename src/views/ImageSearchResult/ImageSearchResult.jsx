import { useContext } from 'react';
import ImageSearchContext from '../../context/ImageSearchContext';
import SearchBar from '../../components/SearchBar';
import '../ImageSearchResult/ImageSearchResult.css';
import info from '../../assets/images/info.svg';
import zaraModelA from '../../assets/images/zara-model.png';
import zaraModelB from '../../assets/images/zara-timeless.png';
import myntraLogo from '../../assets/images/myntra.svg';
import amazonLogo from '../../assets/images/amazon.svg';
import closeModal from '../../assets/images/closeModal.svg';
import ImageResultCard from '../../components/ImageResultCard';


const ImageSearchResult = () => {

    const [capturedImage] = useContext(ImageSearchContext);
    console.log(capturedImage);

    const mockData = [{
        imageFound: capturedImage,
        websiteIcon: myntraLogo,
        websiteIconText: 'Amazon:com: GuliriFei Dress One Peice...',
        websiteText: 'Amazon.com',
    },
    {
        imageFound: zaraModelB,
        websiteIcon: amazonLogo,
        websiteIconText: 'Buy Trendyol Striped Cotton Dress - For...',
        websiteText: 'Myntra',
    }]


    return (

        <div className='image-search-results-layout'>
            <SearchBar capturedImage={capturedImage} />
            <div className='image-search-options'>

                <div className='image-search-options-all'>All</div>
                <div>Products</div>
                <div>Visual Matches</div>
                <div>About this image</div>
            </div>
            <div>
                <div className='image-search-results-info'>
                    <img src={info} alt="" />
                    <div className='image-search-results-text'>Results for people are limited</div>

                </div>
            </div>

            <div className='image-search-collection'>

                <div className='cards-layout'>

                    {mockData.map((card, id) => {
                        return <ImageResultCard
                            key={id}
                            imageFound={card.imageFound}
                            websiteIcon={card.websiteIcon}
                            websiteText={card.websiteIconText}
                            websiteIconText={card.websiteText}
                        />
                    })}

                </div>

            </div>

            <div className='image-search-modal'>
                <div className='modal-content'>
                    <div className='modal-text'>
                        Are these results useful?
                    </div>
                    <div className='modal-text-option1'>
                        Yes
                    </div>
                    <div className='modal-text-option2'>
                        No
                    </div>
                    <div>
                        <img src={closeModal} alt="close-modal" />
                    </div>

                </div>


            </div>



        </div>

    )

}

export default ImageSearchResult;