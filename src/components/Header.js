import React from 'react'
import logo from '../img/logo-white.png';

const Header = () => {
	return (
		<header>                
            <div className="logo"><img src={logo} className="w-100" alt="logo" /></div>
        </header>
	)
}

export default Header