import searchIcon from '../assets/images/searchIcon.svg';
import micIcon from './../assets/images/mic.svg';
import googleLens from '../assets/images/Google_Lens_Icon.svg';
import left from '../assets/images/chevron_left.svg';
import './styles/SearchBar.css';


const SearchBar = ({ searchText, setSearchText, searchResult, setSearchResult, showSearchSuggestion, setShowSearchSuggestion }) => {

    const handleSearchTextInput = (e) => {

        setSearchText(e.target.value);
        console.log("searchText::", searchText)
    }

    const showSearchSuggestionScreen = () => {
        setShowSearchSuggestion(true);

    }
    return (<>
        <div className="searchBar-container" >
            <div className='search-img-container' onClick={showSearchSuggestionScreen}>

                {searchText ? (<img src={left} alt="search-img" />) : (<img src={searchIcon} alt="search-img" />)}
            </div>
            <div className="searchText-container" onClick={showSearchSuggestionScreen}>
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