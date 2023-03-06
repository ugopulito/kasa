import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <Link to='/'><img src="/assets/img/logo-kasa.png" alt="logo kasa" /></Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>À Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;