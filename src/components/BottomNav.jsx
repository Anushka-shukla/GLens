import Home from '../assets/images/home.svg';
import SearchActivity from '../assets/images/search_activity.svg';
import Notifications from '../assets/images/notifications.svg';
import Menu from '../assets/images/menu.svg';

import '../components/styles/BottomNav.css';

const BottomNav = () => {
    return (
        <div className="bottom-nav-wrapper">
            <div className="nav-item-list">
                <div className="nav-home">
                    <img src={Home} alt='home-img' />
                </div>
                <div className="nav-search">
                    <img src={SearchActivity } alt='search_activity-img' />
                </div>
                <div className="nav-notifications">
                    <img src={Notifications} alt='notifications-img' />
                </div>
                <div className="nav-menu">
                    <img src={Menu} alt='menu-img' />
                </div>
            </div>
        </div>
    )

}

export default BottomNav;