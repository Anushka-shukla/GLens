import { useEffect } from 'react';
import chevronLeft from '../../assets/images/chevron_left.svg';
import language from '../../assets/images/language.svg';
import music from '../../assets/images/music_note.svg';
import { useWebVoiceRecognition } from '../../utility/useWebVoiceRecognition';
import { useState } from 'react';

import '../styles/VoiceSuggestion.css';
import VoiceOverlay from '../../components/VoiceOverlay';


const VoiceSuggestion = () => {

    const { startListening } = useWebVoiceRecognition();
    const [isListening, setIsListening] = useState(false);

    const handleVoiceSearch = () => {
        startListening(
            (transcript) => {
                setSearchText(transcript);
                setIsListening(false);
            },
            () => setIsListening(true),    // onStart
            () => setIsListening(false)    // onEnd
        );
    }
    useEffect(() => {
        handleVoiceSearch();

    }, [])

    return (
        <div className="voiceSuggestion-layout">
            <div className="voiceSuggestion-top-row">
                <div className='left-bg'>
                    <img src={chevronLeft} alt="left-img" />

                </div>

                <div className='lang-bg'>
                    <img src={language} alt="lang-img" />

                </div>

            </div>


            <div className='voice-speak-now'>
                {isListening ? 'Listening...' : 'Speak now'}
            </div>

            {isListening && <VoiceOverlay />}

            <div className='song-btn-container'>
                <button className='song-btn'>
                    <div className='music-img'>
                        <img src={music} alt="" />
                    </div>
                    <div className='song-text'>Search a song</div>

                </button>
            </div>




        </div>
    )
}

export default VoiceSuggestion;