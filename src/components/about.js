import  React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Quote from './quote'
import '../styles/about.css'
import my_photo from '../images/ahmed3.jpg'
import signature from '../images/signature.png'

class About extends Component {

	render() {
		const quote = {
		  message: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
		  author: 'Aristotle'
		}
		return (
			<div className="about">
				<Helmet>
	              <meta charSet="<utf></utf>-8" />
	              <title>About | zooboole</title>
		        </Helmet>

				<Quote quote={quote.message} author={quote.author}/>
				<section className="about-me">
					<div className="container">
						<div className="profile-picture">
							<img src={my_photo} alt="Ahmed Salifou Amidou"/>
						</div>
						<div className="about-text">
							<h1>Who are you?</h1>
							<p>Hi, my name is Ahmed Salifou Amidou alias zooboole. Since my childhood, I have always been a big fan of electronic gadgets and circuitries. This passion led me to computer programming.</p>
							<p>Today, I am a web developer by profession, and currently making my way through Computer Science and Computer Engineering.</p>
							<p>Likewise many people in this life, I have my own <strong>ambition</strong> to impact the world with my knowledge. For that matter, I use the first tool at hand: my <s>wing-feather pen</s> <span className="pen"> keyboard.</span></p>
							<p className="signature"><img src={signature} alt="Ahmed-Signature" /></p>
						</div>
					</div>
				</section>
			</div>
			);
	}
}

export default About;