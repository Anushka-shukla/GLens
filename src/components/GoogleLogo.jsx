import googleLogoWhite from '../assets/images/google-logo-white.svg';
import './styles/GoogleLogo.css';

const GoogleLogo = () => {
    return (<>
        <div className='google-logo-container'>
            <img src={googleLogoWhite} alt="google-logo-white" className='google-logo-img' />
        </div>


    </>)

}

export default GoogleLogo;