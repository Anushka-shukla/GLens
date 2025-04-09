import ActionBar from "../../components/ActionBar";
import GoogleLogo from "../../components/GoogleLogo";
import SearchBar from "../../components/SearchBar";
import WidgetWrapper from "../../components/WidgetWrapper";
import SearchSuggestions from "./SearchSuggestions";
import Card from "../../components/Card";
import { useState } from "react";
import ToolBar from "./Toolbar";
import VoiceSuggestion from "./VoiceSuggestion";


const Home = () => {

    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchSuggestion, setShowSearchSuggestion] = useState(false);
    const [showVoiceSuggestionScreen, setShowVoiceSuggestionScreen]= useState(false)

    
    if (showSearchSuggestion) {
        return <SearchSuggestions searchText={searchText} setSearchText={setSearchText}
        searchResult={searchResult} setSearchResult={setSearchResult}
        showSearchSuggestion={showSearchSuggestion} setShowSearchSuggestion={setShowSearchSuggestion} />
    }

    if(showVoiceSuggestionScreen){
        return(
            <VoiceSuggestion/>
        )
    }


    return (<>
        <ActionBar />
        <GoogleLogo />
        <SearchBar searchText={searchText} setSearchText={setSearchText}
            searchResult={searchResult} setSearchResult={setSearchResult}
            showSearchSuggestion={showSearchSuggestion} setShowSearchSuggestion={setShowSearchSuggestion} setShowVoiceSuggestionScreen={setShowVoiceSuggestionScreen}/>
        <ToolBar />
        <WidgetWrapper />
        <Card />


    </>)

}

export default Home;