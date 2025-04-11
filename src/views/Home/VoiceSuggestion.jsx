import { useEffect } from 'react';
import chevronLeft from '../../assets/images/chevron_left.svg';
import language from '../../assets/images/language.svg';
import music from '../../assets/images/music_note.svg';
import { useWebVoiceRecognition } from '../../utility/useWebVoiceRecognition';
import { useState } from 'react';

import '../styles/VoiceSuggestion.css';
import VoiceOverlay from '../../components/VoiceOverlay';


const VoiceSuggestion = ({ setSearch, handleShowVoiceSearch }) => {

    const { startListening } = useWebVoiceRecognition();
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');

    const handleVoiceSearch = () => {
        startListening(
            (spokenText) => {
                setTranscript(spokenText);
                setIsListening(false);
            },
            () => setIsListening(true),
            () => setIsListening(false)
        );
    };

    useEffect(() => {
        handleVoiceSearch();

    }, []);

    useEffect(() => {
        if (transcript) {
            setTimeout(() => {
                setSearch(transcript);
                handleShowVoiceSearch();
            }, 1000);


        }

    }, [transcript])

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


            {!transcript && <div className='voice-speak-now'>
                {isListening ? 'Listening...' : 'Speak now'}
            </div>}

            {transcript && (
                <div className="voice-transcript">
                    <h3>{transcript}</h3>
                </div>
            )}

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