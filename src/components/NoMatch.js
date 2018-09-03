import  React, { Component } from 'react'
import '../styles/404.css'

class Scientist extends Component {
	componentWillMount(){
	  document.title = "Pagenot found | zooboole"
	}
	render() {
		return (
				<section className="notfound">
					<div className="container">
					<h1>Page Not Found</h1>
					<p>Ooops! You just hit a nut. Kindly use the main menu at the header or footer to get to a different page.<br/>My appologies.</p>
					<p><small>Cover image by <a href="https://twitter.com/lzsthw" target="_blank" rel="noopener noreferrer">ZED A. SHAW</a></small></p>
					</div>
				</section>
			);
	}
}

export default Scientist;