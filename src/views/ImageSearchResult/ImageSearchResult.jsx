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



const mockData = [{
    imageFound: zaraModelA,
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

const ImageSearchResult = () => {

    const [capturedImage] = useContext(ImageSearchContext);
    console.log(capturedImage)

    return (



        <div className='image-search-results-layout'>
             <SearchBar />
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

                    <div className='search-card-first'>
                        <div className='main-img'>
                            <img src={capturedImage} alt="capturedImg" />
                        </div>

                        <div className='card-details'>

                            <div className='website-icon'>
                                <div className='row-text'>
                                    <img src={mockData?.[0]?.websiteIcon} alt="imageSearch" />
                                </div>
                                <div className='website-icon-text'>
                                    {mockData?.[0]?.websiteText}
                                </div>
                            </div>
                            <div className='webiste-text'>
                                {mockData?.[0]?.websiteIconText}

                            </div>
                        </div>

                    </div>

                    {/* 2nd data */}

                    <div className='search-card-second'>
                        <img src={mockData[1].imageFound} alt="image-a" />
                        <div>
                            <div className='website-icon'>
                                <div className='row-text'>
                                    <img src={mockData[1].websiteIcon} alt="imageSearch" />
                                </div>
                                <div className='website-icon-text'>
                                    {mockData[1].websiteText}
                                </div>
                            </div>
                            <div className='webiste-text'>
                                {mockData?.[1]?.websiteIconText}
                            </div>
                        </div>
                    </div>

                    {/* 3rd data */}
                    {/* 
                    <div className='search-card-third'>
                        <img src={zaraModelB} alt="image-b" />
                        <div>
                            <div className='website-icon'>
                                <img src={mockData.websiteIcon} alt="imageSearch" />
                                <div className='website-icon-text'></div>
                            </div>
                            <div className='webiste-text'>

                            </div>
                        </div>
                    </div> */}

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