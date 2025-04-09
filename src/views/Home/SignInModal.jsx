import { useState } from 'react';
import closeIcon from '../../assets/images/close.svg';

import GoogleLogo from '../../components/GoogleLogo';

import '../styles/SignInModal.css';



const SignInModal = () => {

    const [closeModal, setCloseModal] = useState(false);

    function handleCloseModal(){
        setCloseModal(true)
    }

    return (
        <div className='modal-container'>
            <div className='modal-layout'>

                <div className='modal-top-row'>

                    <button className='close-icon-container' onClick={handleCloseModal}>
                        <img src={closeIcon} alt='close-img' />
                    </button>
                    <div className='googleLogo-container'>

                    <GoogleLogo />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default SignInModal;