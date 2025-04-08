import searchIcon from '../assets/images/searchIcon.svg';
import micIcon from './../assets/images/mic.svg';
import googleLens from '../assets/images/Google_Lens_Icon.svg';
import './styles/SearchBar.css';

const SearchBar = () => {
    return (<>
        <div className="searchBar-container">
            <div className='search-img-container'>
                <img src={searchIcon} alt="search-img" className="search-img" />
            </div>
            <div className="searchText-container">
                <span className='searchText'>Search</span>
            </div>

            <div className="search-inner-container">
                <div>
                    <img src={micIcon} alt="" className="search-mic" />
                </div>
                <div>
                    <img src={googleLens} alt="" className="search-lens" />
                </div>

            </div>


        </div>
    </>)

}

export default SearchBar;