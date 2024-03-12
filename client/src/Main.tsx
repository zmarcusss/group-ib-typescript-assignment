import React, { useEffect, useState } from 'react';
import { Notification } from './types';
import './App.css';
import { useSettings } from './SettingsContext';

const Main = () => {
 const [notifications, setNotifications] = useState<Notification[]>([]);
 const {
    settings: { notificationsCount, notificationsPosition, notificationsDisappearTime },
 } = useSettings();

 useEffect(() => {
    const eventSource = new EventSource('http://127.0.0.1:9000/events');

    eventSource.onmessage = (event) => {
      const newNotification: Notification = JSON.parse(event.data);
      console.log(newNotification);
      setNotifications((prevNotifications) => {
        const updatedNotifications = [...prevNotifications, newNotification];
        const slicedNotifications = updatedNotifications.slice(-notificationsCount);
        slicedNotifications.forEach((notification, index) => {
          setTimeout(() => {
            setNotifications((notifications) => notifications.filter((n) => n !== notification));
          }, notificationsDisappearTime);
        });
        return slicedNotifications;
      });
    };

    return () => {
      eventSource.close();
    };
 }, [notificationsCount, notificationsDisappearTime]);

 const handleClose = (index: number) => {
    setNotifications((prevNotifications) => prevNotifications.filter((_, i) => i !== index));
 };

 const notificationContainerClass = `notification-container ${notificationsPosition}`;

 return (
    <div>
      <div className={notificationContainerClass} style={{ marginTop: 60 }}>
        {notifications.map((notification, index) => (
          <div key={index} className="notification-box">
            <p>{notification.msg}</p>
            <button onClick={() => handleClose(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
 );
};

export default Main;