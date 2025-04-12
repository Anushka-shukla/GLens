import searchIcon from '../assets/images/searchIcon.svg';
import micIcon from './../assets/images/mic.svg';
import googleLens from '../assets/images/Google_Lens_Icon.svg';
import left from '../assets/images/chevron_left.svg';
import searchGoogleLogo from '../assets/images/search-googleLogo.png'
import './styles/SearchBar.css';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';



const SearchBar = ({ searchText, setSearchText, searchResult, setSearchResult, showSearchSuggestion, setShowSearchSuggestion, setShowVoiceSuggestionScreen, capturedImage }) => {

    // const fileInputRef = useRef(null);

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

    const getSearchBarIcons = () => {
        if (capturedImage) {
            return (<img src={searchGoogleLogo} alt="google-icon" className='google-icon-image-search' />);
        }
        if (searchText) {
            return (
                <img src={left} alt="search-img" onClick={handleBackBtn} />)

        }
        return (<img src={searchIcon} alt="search-img" />)
    }

    const getAvatar = () => {
        if (capturedImage) {
            return (<div className='avatar-search-bar'>
                <span>A</span>
                </div>)
        }
        return (
            <>
                <button className='mic-btn' onClick={handleShowVoiceSuggestionScreen} value={searchText}>
                    <img src={micIcon} alt="mic" className="search-mic" />
                </button>
                <div className='search-lens-conatainer'>
                    <button className='mic-btn' onClick={handleCamera}>
                        <img src={googleLens} alt="lens" className="search-lens" />
                    </button>
                </div>
            </>)
    }




    return (<>
        <div className="searchBar-container" >
            <div className='search-img-container' onClick={showSearchSuggestionScreen}>

                {getSearchBarIcons()}
            </div>
            <div className="searchText-container" onClick={showSearchSuggestionScreen}>

                <div className='search-bar-image'>
                    {capturedImage ? (<img src={capturedImage} alt="img-captured" className='captured-img-search-bar' />) : ""}
                </div>

                <input className='searchText' placeholder={capturedImage ? "Add to search" : "Search"} onChange={handleSearchTextInput} value={searchText} />

            </div>

            <div className="search-inner-container">
                {getAvatar()}


            </div>
        </div>

    </>)

}

export default SearchBar;