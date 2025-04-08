import settings from './../assets/images/settings.svg';
import bedtime from './../assets/images/bedtime.svg';
import airwave from './../assets/images/airwave.svg';
import Widget from '../views/Home/Widget';

import '../components/styles/WidgetWrapper.css';


const WidgetWrapper = () => {

    const widgets = [
        { widgetText: 'Gurugram', widgetDetails: '30°', widgetIcon: bedtime },
        { widgetText: 'Air quality : 170', widgetDetails: 'Moderate', widgetIcon: airwave }
        // ,
        // { widgetText: imageSchool, widgetDetails: '', widgetIcon: {} }
    ];

    console.log("here::s")
    return (
        <>
           <div className="widgetWrapper-layout">
                {widgets.map((widget, index) => (
                    <Widget
                        key={index}
                        widgetText={widget.widgetText}
                        widgetDetails={widget.widgetDetails}
                        widgetIcon={widget.widgetIcon}
                    />
                ))}
            </div>
        </>
    )
}

export default WidgetWrapper;