
import '../../views/styles/Widget.css';

const Widget = ({ widgetText, widgetDetails, widgetIcon }) => {

    console.log('sJHDGSGDJGJGDJH')
    return (
        <>
            <div className="widgetList-layout">

                <div className="widget-text">{widgetText}</div>

                <div className="widget-bottom-layout">
                    <span className="widget-details">{widgetDetails}</span>

                    <img src={widgetIcon} alt='widget-img' />
                </div>

            </div>
        </>
    )
}

export default Widget;