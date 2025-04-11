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
    const [showVoiceSuggestionScreen, setShowVoiceSuggestionScreen] = useState(false);
  

    console.log(showSearchSuggestion, showVoiceSuggestionScreen)
    if (showSearchSuggestion) {
        return <SearchSuggestions searchText={searchText} setSearchText={setSearchText}
            searchResult={searchResult} setSearchResult={setSearchResult}
            showSearchSuggestion={showSearchSuggestion} setShowSearchSuggestion={setShowSearchSuggestion} setShowVoiceSuggestionScreen={setShowVoiceSuggestionScreen} />
    }

    const handleShowVoiceSearch = () => {
        setShowSearchSuggestion(true);
        setShowVoiceSuggestionScreen(false);
    }


    if (showVoiceSuggestionScreen) {

        return (
            <VoiceSuggestion setSearch={setSearchText} handleShowVoiceSearch={handleShowVoiceSearch} />
        )
    }


    return (<>
        <ActionBar />
        <GoogleLogo />
        <SearchBar searchText={searchText} setSearchText={setSearchText}
            searchResult={searchResult} setSearchResult={setSearchResult}
            showSearchSuggestion={showSearchSuggestion} setShowSearchSuggestion={setShowSearchSuggestion} setShowVoiceSuggestionScreen={setShowVoiceSuggestionScreen} />
        <ToolBar />
        <WidgetWrapper />
        <Card />


    </>)

}

export default Home;