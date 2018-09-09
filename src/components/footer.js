import  React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/footer.css'

class Footer extends Component {
	render() {
		const current_year = (new Date()).getFullYear();
		return (
				<footer className="sitefooter">
					<div className="container">
						<ul className="footer-links">
							<li style={{fontSize:'12px', padding:'0.4rem 0.7rem'}}>Copyright {current_year} &copy; zooboole &bull; Some rights are reserved</li>
							<li><NavLink exact to="/about">About</NavLink></li>
							<li><NavLink exact to="/terms-and-conditions">Terms</NavLink></li>
							<li><NavLink exact to="/disclaimer">Disclaimer</NavLink></li>
						</ul>
						<div></div>
					</div>
				</footer>
			);
	}
}

export default Footer;