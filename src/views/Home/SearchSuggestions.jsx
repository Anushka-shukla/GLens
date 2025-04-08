
import schedule from '../../assets/images/schedule.svg';
import SearchBar from '../../components/SearchBar';

import '../styles/SearchSuggestions.css';



const sampleRecentSearches = [
    { searchedText: 'how to make avocado sandwhich recipe' },
    { searchedText: 'best samosa place near me'},
    { searchedText: 'how to center a div'},
    { searchedText: 'how to make google clone'}
]

const SearchTextItems=() =>{
    return(
        <div>
            
          {/* {sampleRecentSearches.map((sampleSearch, index) => (
            <div key={index}>
              {sampleSearch.searchedText}
            </div>
          ))} */}
            
      {sampleRecentSearches.map((sampleSearch, index) => (
        <div key={index} className="search-history-list">
          <div className='recent-search-icon'>
            <img src={schedule} alt="search-img" />
          </div>

          <div className='recent-search-text'>
            {sampleSearch.searchedText}
          </div>
        </div>
      ))}
    
        </div>

    )
}

const SearchSuggestions = ({ userInputText }) => {





    return (
        <div className='search-suggestion-layout'>
            <SearchBar />

            <div className="search-options-container">
                <button className="recent-search">Recent Searches</button>
                <button className="history">Manage History</button>


            </div>

            {/* <div className="search-history-list"> */}



                {/* <div className='recent-search-icon'>
                    <img src={schedule} alt="search-img" />
                </div> */}

                {/* <div className='recent-search-text'> */}
                   <SearchTextItems/>
                {/* </div> */}
               


            {/* </div> */}

        </div>
    )

}

export default SearchSuggestions;