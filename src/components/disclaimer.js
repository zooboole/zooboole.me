import  React, { Component} from 'react'
import {Helmet} from "react-helmet";
import '../styles/texts.css'


class Disclaimer extends Component {
	
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
							<h1>Disclaimer</h1>
							<p></p>
							<p>The information on this website is distributed on an “As Is” basis, without warranty. While every precaution has been
							taken in the preparation of this work, neither the author nor The Brands or The people mentioned shall have any liability to any
							person or entity with respect to any loss or damage caused or alleged to be caused directly or indirectly by the
							information contained in it.</p>
							<p>The images of the scientists used at my homepage are all from Google search of scientists.</p>
							<p>I am not, in any way, for now, except we have the same passion, related to any of the scientists. My work is mine. my opinion is mine.</p>
						</div>
					</div>
				</div>
			</div>
			)
	}
}

export default Disclaimer;