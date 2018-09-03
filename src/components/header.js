import  React, { Component } from 'react'
import Logo from './profile-picture'
import Introduction from './introduction'

import '../styles/header.css'
class Header extends Component {
	render() {
		return (
			<header className="header"> 
				<div className="container header-content">
					<Logo />
					<Introduction />
				</div>
			</header>
		);
	}
}

export default Header;