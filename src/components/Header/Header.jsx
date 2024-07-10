import React from 'react';
import Search from '../Search/Search';
import Cart from '../CartButton/CartButton';
import './Header.css';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="mobile-logo">
                <Link to="/">
                    <img src="../img/logo-1024.png" alt="NextGamer Logo" title="NextGamer"/>
                </Link>
            </div>
            <div className="container">
                <Link to="/">
                    <img src="../img/logo-1024.png" alt="NextGamer Logo" title="NextGamer"/>
                </Link>
                <Search/>
                <Link to="/cart">
                    <Cart/>
                </Link>
            </div>
            <div className="menu-section">
                <Menu/>
            </div>
        </header>
    )
}

export default Header;