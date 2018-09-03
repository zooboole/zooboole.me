import  React, { Component } from 'react'

import '../styles/quote.css'

class Quote extends Component {
	render() {
		return (
			<div className="quote">
				<div className="container">
					<blockquote>
						<div>{this.props.quote}</div>
						<strong>{this.props.author}</strong>
					</blockquote>
				</div>
			</div>
			);
	}
}

export default Quote;