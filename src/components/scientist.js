import  React, { Component } from 'react'
import '../styles/scientist.css'

class Scientist extends Component {
	render() {
		const profile = this.props.profile
		const image = require(`../images/${profile.avatar}`)

		const style = {
			backgroundImage: `url(${image})`,
		}
		
		return (
				<div className={this.props.zoom ? 'zoom sci-profile' : 'sci-profile'} >
					<figure>
						<div className="sci-image" style={style}></div>
						<figcaption className="profile-name">
							<h4>{profile.name}</h4>
							<span className="function">{profile.function}</span>
							<span>{profile.time}</span>
						</figcaption>
					</figure>
				</div>
			);
	}
}

export default Scientist;