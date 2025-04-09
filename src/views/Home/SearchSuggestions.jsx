
import schedule from '../../assets/images/schedule.svg';
import search from '../../assets/images/searchIcon.svg';
import SearchBar from '../../components/SearchBar';
import { searchApi } from '../../api/searchAPI.js';
import { useEffect, useState } from 'react';

import '../styles/SearchSuggestions.css';



const sampleRecentSearches = ['how to make avocado sandwhich recipe', 'best samosa place near me', 'how to center a div', 'how to make google clone']

const SearchTextItems = ({ suggestionList, searchText }) => {

  return (
    <div>

      {suggestionList.map((sampleSearch, index) => (
        <div key={index} className="search-history-list">
          <div className='recent-search-icon'>

            {searchText ? (<img src={search} alt="search-img" />) : (<img src={schedule} alt="search-img" />)}
          </div>

          <div className='recent-search-text'>
            {sampleSearch}
          </div>
        </div>
      ))}

    </div>

  )
}

const SearchSuggestions = ({ searchText, setSearchText, searchResult, setSearchResult, showSearchSuggestion, setShowSearchSuggestion }) => {

  useEffect(() => {
    const fetchData = async () => {
      if (searchText) {
        console.log("Search text:", searchText);
        try {
          const result = await searchApi(searchText);
          console.log("Raw result:", result);

          const titles = result.results?.map((item, id) => item.title);
          console.log("Titles:", titles);

          setSearchResult(titles);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      }
    };

    fetchData();
  }, [searchText]);



  return (

    <div className='search-suggestion-layout' onChange={() => { }}>
      <SearchBar searchText={searchText} setSearchText={setSearchText}
        searchResult={searchResult} setSearchResult={setSearchResult}
        showSearchSuggestion={showSearchSuggestion} setShowSearchSuggestion={setShowSearchSuggestion} />

      <div className="search-options-container">
        <button className="recent-search">Recent Searches</button>
        <button className="history">Manage History</button>


      </div>

      <SearchTextItems searchText={searchText} suggestionList={searchText ? searchResult : sampleRecentSearches} />
    </div>
  )

}

export default SearchSuggestions;