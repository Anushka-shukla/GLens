import searchIcon from '../assets/images/searchIcon.svg';
import micIcon from './../assets/images/mic.svg';
import googleLens from '../assets/images/Google_Lens_Icon.svg';
import './styles/SearchBar.css';
import { searchApi } from '../../src/api/searchAPI';
import { useEffect, useState } from 'react';

const SearchBar = ({ searchText, setSearchText, searchResult, setSearchResult, showSearchSuggestion, setShowSearchSuggestion }) => {

    const handleSearchTextInput = (e) => {

        setSearchText(e.target.value);
        console.log("searchText::", searchText)
    }

    useEffect(() => {
        if (searchText) {
            console.log("::::::", searchText)
            let searchOutput = searchApi(searchText);
            console.log("searchResult:::::", searchOutput);
            setSearchResult(searchOutput);
        }
    }, [searchText]);

    const showSearchSuggestionScreen = () => {
        setShowSearchSuggestion(true);


    }
   




    return (<>
        <div className="searchBar-container">
            <div className='search-img-container' onClick={showSearchSuggestionScreen}>
                <img src={searchIcon} alt="search-img" className="search-img" onClick={showSearchSuggestionScreen} />
            </div>
            <div className="searchText-container">
                <input className='searchText' placeholder='Search' onChange={handleSearchTextInput} />
            </div>

            <div className="search-inner-container">
                <div>
                    <img src={micIcon} alt="mic" className="search-mic" />
                </div>
                <div>
                    <img src={googleLens} alt="lens" className="search-lens" />
                </div>

            </div>


        </div>
    </>)

}

export default SearchBar;