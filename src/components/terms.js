import  React, { Component} from 'react'
import {Helmet} from "react-helmet";
import '../styles/texts.css'


class Terms extends Component {
	
	render(){
		return (
			<div className="about">
				<Helmet>
	              <meta charSet="<utf></utf>-8" />
	              <title>Terms and conditions | zooboole</title>
		        </Helmet>
				<div className="contact">
					<div className="container">
						<div className="plain-text">
							<h1>Terms and conditions</h1>
							<p>Well, as this happens in most traditional websites, I am ought to also make a few things clear. I am here to share my experience and my vision of things, I would like you to respect this work as possible as you could. Help to improve it in case something goes wrong.</p>
							<p>Knowledge is an inestimable thing. I have no specific formula now to sell it to you, thus you can use it as you wish.</p>
							<p>One condition. Mention the source and its author. Consider that the content is under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT license</a>.</p>
						</div>
					</div>
				</div>
			</div>
			)
	}
}

export default Terms;