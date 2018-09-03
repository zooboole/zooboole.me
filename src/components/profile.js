import  React, { Component } from 'react'

import '../styles/profile.css'

class Profile extends Component {
	render() {
		const style = {
			backgroundImage: `url('${this.props.logo}')`
		}
		return (
				<section className="profile">
					<div className="container">
						<div className="profile-picture" style={style}></div>
						<div className="profile-message">
						<p>Currently conducting a <strong>comprehensive</strong> research on electronics, Computer Organization, Computer Architecture, Computer Science, and Software Engineering.</p>
						<p>My name is Ahmed S. Amidou, I am a self-educated Software Developer and ambitious computer scientist in Africa. I dedicate my time to studying how computers are built, how they work, and how to make good use of them. <a href="/about">More about me.</a></p>
						</div>
					</div>					
				</section>
			);
	}
}

export default Profile;