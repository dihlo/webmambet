import React from 'react';
import {Link, IndexLink} from 'react-router';

function Header () {
	return (
        <header>
            <div className="NavMenuHeader">
                <nav className="Navigation">
                    <Link onlyActiveOnIndex={true} to="/" className="NavigationLink NavHome">Главная</Link>
                    <Link to="/Portfolio" className="NavigationLink NavPortfolio">Портфолио</Link>
                    <Link to="/Price" className="NavigationLink NavPrice">Цены</Link>
                    <Link to="/Contacts" className="NavigationLink NavContacts">Контакты</Link>
                </nav>
            </div>
        </header>
	);
}

export default Header;