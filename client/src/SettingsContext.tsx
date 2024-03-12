import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Settings {
 notificationsCount: number;
 notificationsPosition: string;
 notificationsDisappearTime: number;
}

const SettingsContext = createContext<{
 settings: Settings;
 setNotificationsCount: (count: number) => void;
 setNotificationsPosition: (position: string) => void;
 setNotificationsDisappearTime: (time: number) => void;
}>({
 settings: {
    notificationsCount: 5,
    notificationsPosition: 'top-left',
    notificationsDisappearTime: 20000,
 },
 setNotificationsCount: () => {},
 setNotificationsPosition: () => {},
 setNotificationsDisappearTime: () => {},
});

interface SettingsProviderProps {
 children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
 const [settings, setSettings] = useState<Settings>({
    notificationsCount: 5,
    notificationsPosition: 'top-right',
    notificationsDisappearTime: 20000,
 });

 const setNotificationsCount = (count: number) => {
    setSettings((prev) => ({ ...prev, notificationsCount: count }));
 };

 const setNotificationsPosition = (position: string) => {
    setSettings((prev) => ({ ...prev, notificationsPosition: position }));
 };

 const setNotificationsDisappearTime = (time: number) => {
    setSettings((prev) => ({ ...prev, notificationsDisappearTime: time }));
 };

 return (
    <SettingsContext.Provider
      value={{
        settings,
        setNotificationsCount,
        setNotificationsPosition,
        setNotificationsDisappearTime,
      }}
    >
      {children}
    </SettingsContext.Provider>
 );
};

export const useSettings = () => useContext(SettingsContext);