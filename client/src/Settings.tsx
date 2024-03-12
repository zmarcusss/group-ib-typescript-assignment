import React from 'react';
import { useSettings } from './SettingsContext';

const Settings = () => {
 const {
    settings: { notificationsCount, notificationsPosition, notificationsDisappearTime },
    setNotificationsCount,
    setNotificationsPosition,
    setNotificationsDisappearTime,
 } = useSettings();

 return (
    <div>
      <h2>Settings</h2>
      <label style={{ color: 'white' }}>
        Notifications Count:
        <input
          type="number"
          value={notificationsCount}
          onChange={(e) => setNotificationsCount(Number(e.target.value))}
        />
      </label>
      <label style={{ color: 'white' }}>
        Notifications Position:
        <select
          value={notificationsPosition}
          onChange={(e) => setNotificationsPosition(e.target.value)}
        >
          <option value="p1">Top Left</option>
          <option value="p2">Top Right</option>
          <option value="p3">Bottom Left</option>
          <option value="p4">Bottom Right</option>
        </select>
      </label>
      <label style={{ color: 'white' }}>
        Notifications Disappear Time (ms):
        <input
          type="number"
          value={notificationsDisappearTime}
          onChange={(e) => setNotificationsDisappearTime(Number(e.target.value))}
        />
      </label>
    </div>
 );
};

export default Settings;