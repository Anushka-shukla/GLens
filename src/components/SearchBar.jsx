import searchIcon from '../assets/images/searchIcon.svg';
import micIcon from './../assets/images/mic.svg';
import googleLens from '../assets/images/Google_Lens_Icon.svg';
import left from '../assets/images/chevron_left.svg';
import './styles/SearchBar.css';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';



const SearchBar = ({ searchText, setSearchText, searchResult, setSearchResult, showSearchSuggestion, setShowSearchSuggestion, setShowVoiceSuggestionScreen, setCapturedImage,
    setShowCropModal }) => {

    const fileInputRef = useRef(null);

    const navigate = useNavigate();

    const handleCamera = () => {
        navigate('./lens')


    }

    const handleSearchTextInput = (e) => {
        setSearchText(e.target.value);
        console.log("searchText::", searchText)
    }

    const showSearchSuggestionScreen = () => {
        setShowSearchSuggestion(true);
        setShowVoiceSuggestionScreen(false);
    }

    const handleShowVoiceSuggestionScreen = () => {
        setShowVoiceSuggestionScreen(true);
        setShowSearchSuggestion(false);

    }

    const handleBackBtn = () => {
        console.log("back")
        setShowSearchSuggestion(false);
        setShowVoiceSuggestionScreen(false);
        console.log("back222")

    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setCapturedImage(reader.result);
            setShowCropModal(true);
        };
        reader.readAsDataURL(file);
        console.log(file)

    };

    // const handleLensBtn = () => {
    //     // Open file input (gallery)
    //     fileInputRef.current?.click();
    // };



    return (<>
        <div className="searchBar-container" >
            <div className='search-img-container' onClick={showSearchSuggestionScreen}>

                {searchText ? (
                    <img src={left} alt="search-img" onClick={handleBackBtn} />) :
                    (<img src={searchIcon} alt="search-img" />)}
            </div>
            <div className="searchText-container" onClick={showSearchSuggestionScreen}>
                <input className='searchText' placeholder='Search' onChange={handleSearchTextInput} value={searchText} />
            </div>

            <div className="search-inner-container">
                <button className='mic-btn' onClick={handleShowVoiceSuggestionScreen} value={searchText}>
                    <img src={micIcon} alt="mic" className="search-mic" />
                </button>
                <div className='search-lens-conatainer'>
                    <button className='mic-btn' onClick={handleCamera}>
                        <img src={googleLens} alt="lens" className="search-lens" />
                    </button>
                </div>

            </div>
        </div>
        {/* Hidden file input for gallery upload */}
        <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handleFileUpload}
        />
    </>)

}

export default SearchBar;