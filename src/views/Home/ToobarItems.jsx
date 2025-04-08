import '../../views/styles/ToolbarItems.css';

const ToolBarItems = ({ imageIcon, toolbarItemsColor }) => {
    return (<>
        <div className="toolbar-items-layout" style={{ backgroundColor: toolbarItemsColor }}>

            <img src={imageIcon} alt='toobarImg' className="toolbar-items-img" />
        </div>
    </>)

}

export default ToolBarItems;