import { useState } from 'react';
import experiment from '../assets/images/experiment.svg';
import geminiAi from '../assets/images/google-gemini-icon.png';
import googleLogo from '../assets/images/googleLogo.png';
import '../components/styles/ActionBar.css';
import SignInModal from '../views/Home/SignInModal';

const ActionBar = () => {
    const [openProfileModal, setOpenProfileModa] = useState(false);

    const handleProfileModal = () => {
        setOpenProfileModa(true);
    }

    return (<>
        {/* Show Modal conditionally */}
        {openProfileModal && <SignInModal />}
        <div className='actionBar-Container'>
            <button className='experimental-labs'>
                <img src={experiment} alt="experimental-labs" className='labs-img' />
            </button>

            <div className='google-search-container'>
                <div className='google-search-content'>
                    <img src={googleLogo} alt='google-icon' />
                    <button className='google-search-action-top'>Search</button>
                </div>
                <div className='google-gemini'>
                    <img src={geminiAi} alt='gemini' className='gemini' />
                </div>

            </div>

            <div className='avatar'>
                <button className='profile-avatar' onClick={handleProfileModal}>A</button>
            </div>




        </div>


    </>)

}

export default ActionBar;