import  React, { Component } from 'react'
import {Helmet} from "react-helmet";
// import { docco } from 'react-syntax-highlighter/styles/hljs';
import article_author_image from '../images/zooboole.jpg'
import '../styles/articles.css'
const axios = require('axios');	
const ReactMarkdown = require('react-markdown')

class Article extends Component {
	constructor(props){
		super(props)
		this.state = {
			article: [],
			articlecover: null
		}
	}



	componentDidMount(){
		// Get posts with axios
		const  slug = this.props.match.params.slug
		axios.get('http://api.zooboole.me/blog/posts/'+slug)
		.then( (response) => {
			if (response.data) {
				const theArticle = response.data[0]
				let state = Object.assign({}, this.state, {article: theArticle, articlecover: theArticle.image})
				this.setState({...state})
			}
		})
		.catch( (error) => {
			console.log(error);
		});
	}

	render() {
		const article = this.state.article
		var articleimg = article.image
		var vrim = articleimg !== undefined ? require('../images/'+articleimg+'') :null

		const articlecover = {
			backgroundImage:  `url('${vrim}')`,
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			minHeight: '450px',
			maxHeight: '350px',
		}
		const authorimage = {
			background:`url('${article_author_image}')`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
		}
		
		return (
			<div>
				<Helmet>
	              <meta charSet="<utf></utf>-8" />
	              <title>{`${article.title}`} | zooboole</title>
		        </Helmet>
				<div className="article-banner" style={articlecover}></div>
				<div className="container">
					<article className="article">
						<header>
							<h1>{article.title}</h1>
							<section className="post-meta">
				                <time className="post-date" dateTime={article.created_at}>{article.created_at}</time>  on {article.category}
				            </section>
						</header>
						<section>
							<ReactMarkdown source={article.content} />
						</section>
						<footer className="post-footer">
				            <figure className="author-image">
				                <a className="img" href="/about" style={authorimage}><span className="hidden">zooboole's Picture</span></a>
				            </figure>

				        	{/* Keep this static under each publication for now */}
				            <div className="author-details">
	            				<section className="author">
					                <h4><a href="/about">Ahmed Salifou Amidou (zooboole)</a></h4>
					                <p>Self-taught Software & Electrical Engineer, and experienced full-stack web developer.</p>
					                <div className="author-meta">
					                    <span className="author-location">Accra, GH</span>
					                </div>
					            </section>
					            <section className="share">
					                <h4>Share this article</h4>
					                <a className="button" href="https://twitter.com/intent/tweet?text=An%20Astounding%20Example%20of%20Efficiency%20with%20B-Trees&amp;url=http://zooboole.me/{article.title}/">
					                    <span className="hidden">Twitter</span>
					                </a>
					                <a className="button" href="https://www.facebook.com/sharer/sharer.php?u=http://zooboole.me/{article.slug}/">
					                    <span className="hidden">Facebook</span>
					                </a>
					                <a className="button" href="https://plus.google.com/share?url=http://zooboole.me/{article.slug}/">
					                    <span className="hidden">Google+</span>
					                </a>
					            </section>
				            </div>
				        </footer>
					</article>
				</div>
			</div>
			);
	}
}

export default Article;