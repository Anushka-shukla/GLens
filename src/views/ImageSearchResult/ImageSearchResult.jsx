import { useContext } from 'react';
import SearchBar from '../../components/SearchBar';
import '../ImageSearchResult/ImageSearchResult.css';
import ImageSearchContext from '../../context/ImageSearchContext';
import airwave from '../../assets/images/airwave.svg';


const ImageSearchResult = () => {

    const [capturedImage] = useContext(ImageSearchContext);
    console.log(capturedImage)

    return (
       

     
        <div className='image-search-results-layout'>
            <SearchBar />
            <div className='image-search-options'>
                <div>All</div>
                <div>Products</div>
                <div>Visual Matches</div>
                <div>About this image</div>
            </div>
            <div>
                <div>
                    <img src={airwave} alt="" />
                    Search for people are limited
                </div>
            </div>

            <div className='image-search-collection'>
               <img src={capturedImage} alt="" />


            </div>
            <div className='image-search-modal'>
                <div>
                    <div>
                        Are these results useful?

                    </div>
                    <div>
                        Yes
                    </div>
                    <div>
                        No
                    </div>

                </div>


            </div>



        </div>
       
    )

}

export default ImageSearchResult;