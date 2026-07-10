import {useState} from 'react'
import './styles/Notification.module.css'

function Notification () {
    const [notification, setNotification] = useState({
        message: "This is a notification",
        type: "info"
    });

    return (
        <div className={`notification notification-${notification.type}`}>
            <p>{notification.message}</p>
        </div>
    );
}




export default Notification;
