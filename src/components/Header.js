import React from 'react';
import './Header.css';


function Header(props) {

    

    const {
        onMenuSelect
    } = props;
    return (
        <div className="app-header">
            <span className="header-title">Todo </span>
            
            <span className="header-menu" onClick={() => {
                
            }}>Logout </span>
            <span className="header-menu" onClick={() => {
                onMenuSelect('usage');
            }}>Usage </span>
            
            
            
            <span className="header-menu" onClick={() => {
                onMenuSelect('settings');
            }}>Settings </span>
            <span className="header-menu" onClick={() => {
                onMenuSelect('home');
            }}>Home </span>
        </div>
    );
}

export default Header;