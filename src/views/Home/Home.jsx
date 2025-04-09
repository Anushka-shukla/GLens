import ActionBar from "../../components/ActionBar";
import GoogleLogo from "../../components/GoogleLogo";
import SearchBar from "../../components/SearchBar";
import WidgetWrapper from "../../components/WidgetWrapper";
import SearchSuggestions from "./SearchSuggestions";
import Card from "../../components/Card";
import { useState } from "react";
import ToolBar from "./Toolbar";


const Home = () => {

    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchSuggestion, setShowSearchSuggestion] = useState(false);
    
    if (showSearchSuggestion) {
        return <SearchSuggestions searchText={searchText} setSearchText={setSearchText}
        searchResult={searchResult} setSearchResult={setSearchResult}
        showSearchSuggestion={showSearchSuggestion} setShowSearchSuggestion={setShowSearchSuggestion} />
    }

    return (<>
        <ActionBar />
        <GoogleLogo />
        <SearchBar searchText={searchText} setSearchText={setSearchText}
            searchResult={searchResult} setSearchResult={setSearchResult}
            showSearchSuggestion={showSearchSuggestion} setShowSearchSuggestion={setShowSearchSuggestion}/>
        <ToolBar />
        <WidgetWrapper />
        <Card />


    </>)

}

export default Home;