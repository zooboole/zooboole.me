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
							<li><NavLink exact to="/">Home</NavLink></li>
							<li><NavLink exact to="/about">About</NavLink></li>
							<li><NavLink exact to="/terms-and-conditions">Terms</NavLink></li>
							<li><NavLink exact to="/disclaimer">Disclaimer</NavLink></li>
						</ul>
						<ul className="footer-links">
							<li><a href="http://twitter.com/zooboole">Twitter</a></li>
							<li><a href="https://gh.linkedin.com/in/zooboole">Linkedin</a></li>
							<li><a href="http://github.com/zooboole">Github</a></li>
							<li><a href="http://facebook.com/zooboole">Facebook</a></li>
							<li><a href="https://www.youtube.com/channel/UCY-86KEOOCqu0l-rZmrR2qA">Youtube</a></li>
							<li><a href="https://plus.google.com/u/1/+zoobooleme/posts">Google+</a></li>
						</ul>
						<div>Copyright {current_year} &copy; zooboole &bull; Some rights are reserved</div>
					</div>
				</footer>
			);
	}
}

export default Footer;