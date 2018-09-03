import  React, { Component } from 'react'
// Router
import { NavLink } from 'react-router-dom'

import '../styles/introduction.css'

class Navigation extends Component {

	render() {
		return (
				<div className="menu">
					<ul className="navigation">
						<li><NavLink exact to="/">Home</NavLink></li>
						<li><NavLink exact to="/publications">Publications</NavLink></li>
						<li><NavLink exact to="/work">Work</NavLink></li>
						<li><NavLink exact to="/resume">Resume</NavLink></li>
						<li><NavLink exact to="/quotes">Quotes</NavLink></li>
						<li><NavLink exact to="/contact">Contact</NavLink></li>
					</ul>
				</div>
			);
	}
}

export default Navigation;