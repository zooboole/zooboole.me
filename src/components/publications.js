import  React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Quote from './quote'
import '../styles/publications.css'
const axios = require('axios');	

class Publications extends Component{
	constructor(props){
		super(props);
		this.state = {
			publications: []
		}
	}

	componentDidMount(){
		// Get posts with axios
			axios.get('http://api.zooboole.me/blog/posts')
			.then( (response) => {
				if (response.data) {
					this.setState({publications: response.data})
				}
			})
			.catch( (error) => {
				console.log(error);
			});
	}

	render(){
		const quote = {
		  message: "No idea can really be said to be original - for every 'new idea' is a development of the countless ideas which have gone before.",
		  author: 'Nicky Stanton'
		}

		let posts = this.state.publications
		console.log(posts)
		return (
			<div>
				<Helmet>
	              <meta charSet="<utf></utf>-8" />
	              <title>My publications | zooboole</title>
		        </Helmet>
				<Quote quote={quote.message} author={quote.author}/>
				<div className="container">
					<ol className="articles">
					{
						posts.map( (publication) => {
							return(<li key={publication.id}><a href={publication.slug}>{publication.title}</a></li>)
						})
					}
						
					</ol>
				</div>
			</div>
		);
	}
}


export default Publications;