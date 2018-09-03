import  React, { Component } from 'react'

import Navigation from './navigation'

import '../styles/introduction.css'

class Introduction extends Component {
	render() {
		return (
				<div className="introduction">
					<Navigation/>
				</div>
			);
	}
}

export default Introduction;