import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, color: 'white', padding: '10px 0', zIndex: 1000 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ margin: 0 }}>Notification Task</h1>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'space-around', width: '200px' }}>
                    <li>
                        <Link to="/main" style={{ color: 'white', textDecoration: 'none' }}>Main</Link>
                    </li>
                    <li>
                        <Link to="/settings" style={{ color: 'white', textDecoration: 'none' }}>Settings</Link>
                    </li>
                </ul>
            </div>
            <hr style={{ border: 'none', borderTop: '1px solid grey', width: '100%', margin: '0' }} />
        </nav>
    );
};

export default NavBar;

