
import { useState } from 'react';
import css from './styles/Notification.module.css'

function Notification () {
    const [notification, setNotification] = useState({
        message: "This is a notification",
        type: "info"
    });

    return (
        <div className={css.notification}>
            <p>{notification.message}</p>
        </div>
    );
}




export default Notification;
