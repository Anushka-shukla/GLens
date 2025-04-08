import ToolBarItems from '../Home/ToobarItems';
import imageSearch from '../../assets/images/img-search.svg';
import imageTranslate from '../../assets/images/translate.svg';
import imageSchool from '../../assets/images/school.svg';
import imageMusic from '../../assets/images/music_note.svg';
import '../../views/styles/Toolbar.css';

const ToolBar = () => {
    const items = [
        { imageIcon: imageSearch, toolbarItemsColor: 'rgba(251, 191, 36, 0.2)' },   // yellow 
        { imageIcon: imageTranslate, toolbarItemsColor: 'rgba(96, 165, 250, 0.2)' },   // blue
        { imageIcon: imageSchool, toolbarItemsColor: 'rgba(52, 211, 153, 0.2)' },   // green
        { imageIcon: imageMusic, toolbarItemsColor: 'rgba(248, 113, 113, 0.2)' },  // red
    ];

    return (
        <>
            <div className="toobar-layout">

                {items.map((item, index) => (
                    <ToolBarItems key={index} imageIcon={item.imageIcon} toolbarItemsColor={item.toolbarItemsColor} />
                ))}



            </div>
            <div className="line"></div>
        </>

    );
};

export default ToolBar;
