import  React, { Component} from 'react'
import {Helmet} from "react-helmet";
import Quote from './quote'
import '../styles/contact.css'
const axios = require('axios');

// Quote of the page
const quote = {
  message: 'When in doubt, use brute force.',
  author: 'Ken Thompson'
}
class Citations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
			alert: '',
			confirm: false,
		}

		this.keyIn = this.keyIn.bind(this)
		this.sendRequest = this.sendRequest.bind(this)
	}

	keyIn(e) {
		const target = e.target
		const value = target.value
		const name = target.name
		this.setState({
			[name]: value,
		})
	}

	sendRequest(e) {
		e.preventDefault();
		const {name, email, message} = this.state
		if (name === '' || email === '' || message === '') {
			this.setState({alert:'All fields are required.'})
		}else{
			// Empty alerts. No alert
			this.setState({alert:''})

			// Set form data with FormData
			// otherwise, axios.post 
			// will send empty $_POST to PHP
			const formData = new FormData()
			formData.append('name', name)
			formData.append('email', email)
			formData.append('message', message)

			// Run a post request with
			axios.post('contact.php', formData)
			.then( (response) => {
				if (response.data.status) {
					this.setState({alert: response.data.confirm, name:'', email:'', message: '', confirm:true})
				}else{
					this.setState({alert: response.data.error})
				}
			})
			.catch( (error) => {
				console.log(error);
			});
		}
	}

	render(){
		const confirm = this.state.confirm ? 'confirm':''
		const alert = this.state.alert !== '' ? 'alert':''
		return (
			<div className="about">
				<Helmet>
	              <meta charSet="<utf></utf>-8" />
	              <title>Contact me | zooboole</title>
		        </Helmet>

				<Quote quote={quote.message} author={quote.author}/>

				<div className="work-intro">
					<div className="container">
						<p>Get a question or any comment? kindly use the form below to get in touch. Please, I can't guarantee that I would reply to all messages or my response could be quick, but I will always do my best to give you a feedback. </p>
						<div className="socials">
							<p>If you like my work, and would like to stay up to date with it, kindly consider following me on my various social media pages.</p>
							<ul>
								<li><a href="http://twitter.com/zooboole">Twitter</a></li>
								<li><a href="https://gh.linkedin.com/in/zooboole">Linkedin</a></li>
								<li><a href="http://github.com/zooboole">Github</a></li>
								<li><a href="https://www.youtube.com/channel/UCY-86KEOOCqu0l-rZmrR2qA">Youtube</a></li>
								<li><a href="http://facebook.com/zooboole">Facebook</a></li>
								<li><a href="https://plus.google.com/u/1/+zoobooleme/posts">Google+</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="contact">
					<div className="container">
						<div className={confirm +' '+ alert} >{this.state.alert}</div>
						<form onSubmit={this.sendRequest}>
							<div className="form-group">
								<label for="name">* How should I call you?</label>
								<input type="text" name="name" id="name" value={this.state.name} onChange={this.keyIn}/>
							</div>
							<div className="form-group">
								<label for="email">* Your email address</label>
								<input type="email" name="email" id="email" value={this.state.email} onChange={this.keyIn}/>
							</div>
							<div className="form-group">
								<label for="message">* Your message</label>
								<textarea col="10" name="message" id="message" value={this.state.message} onChange={this.keyIn} />
							</div>

							<button>Send Message</button>
						</form>
					</div>
				</div>
			</div>
			)
	}
}

export default Citations;