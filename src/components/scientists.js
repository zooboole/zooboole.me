import  React, { Component } from 'react'
import Scientist from '../components/scientist'
import '../styles/scientists.css'

class Scientists extends Component {
	render() {
		const the_scientists = this.props.list
		
		return (
				<div className="scientists">
				<div className="container">
					{the_scientists.map(profile => {
						return <Scientist profile={profile} key={profile.id} zoom = {profile.zoom} />
					})}
				</div>
				</div>
			);
	}
}

export default Scientists;