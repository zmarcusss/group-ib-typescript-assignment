import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import NavBar from './NavBar'; 
import Main from './Main'; 
import Settings from './Settings'; 
import { SettingsProvider } from './SettingsContext';

const App = () => {

    return (

        <SettingsProvider>
        <div className="wrapper">

        <Router>
            <NavBar /> {}
            <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Router>
        </div>
        </SettingsProvider>
    );
};

export default App;