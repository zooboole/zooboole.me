import  React from 'react'
import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom'
import Quote from './quote'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import '../styles/work.css'

// Quote of the page
// const quote = {
//   message: 'When in doubt, use brute force.',
//   author: 'Ken Thompson'
// }
const quote = {
  message: 'I admire people who take steps and action daily rather than dreaming big, talking about it repeatedly and doing nothing.',
  author: 'Prosper Otemuyiwa'
}
// Data: works. This could be fetched from a database
const works = [
	{
		id: Math.random(),
		name: 'zooboole',
		component: 'zooboole',
	},
	{
		id: Math.random(),
		name: 'Banks Official',
		component: 'banksofficial',
	},
	{
		id: Math.random(),
		name: 'Phpocean',
		component: 'phpocean',
	},
	{
		id: Math.random(),
		name: 'Businessjug',
		component: 'businessjug',
	},
	{
		id: Math.random(),
		name: 'Mygnfx',
		component: 'mygnfx',
	},
	{
		id: Math.random(),
		name: 'Mycrowdsourcing',
		component: 'mycrowdsourcing',
	},
	{
		id: Math.random(),
		name: 'Bell Health Solutions',
		component: 'bellhealthsolutions',
	},
	{
		id: Math.random(),
		name: 'Liberty Christian Church',
		component: 'libertychristianchurchpa',
	},
	{
		id: Math.random(),
		name: 'Nordjz',
		component: 'nordjz',
	},
	{
		id: Math.random(),
		name: 'Him-Connect',
		component: 'himconnect',
	},
	{
		id: Math.random(),
		name: 'Web Development Starter Kit',
		component: 'webdevelopmentstarterkit',
	},
	

]

const Work = ({match}) => (
	<div className="about">
			<Helmet>
              <meta charSet="<utf></utf>-8" />
              <title>My work | zooboole</title>
	        </Helmet>

			<Quote quote={quote.message} author={quote.author}/>

			<div className="work-intro">
				<div className="container">
					<p>I research on computers and write about it <NavLink to="/publications">here</NavLink>. I wrote <a href="https://phpocean.com" target="_blank" rel="noopener noreferrer">100</a>+ blog posts and tutorials on web development, 
					and <a href="http://businessjug.com" target="_blank" rel="noopener noreferrer">hundreds</a> of others on tech businesses and startups. I shared my overall experience in web development as <a href="http://webdevelopmentstarterkit.com" target="_blank" rel="noopener noreferrer">a book</a>. Here are <b>some</b> of the works I have done through that routine.</p>
				</div>
			</div>
		<div className="work-projects">
			<nav className="container">
			  <Router>
			    <div>
			      <ul className="works-list">
					{ 
						works.map(project => {
							return (<li key={project.id}><Link to={`${match.url}/${project.component}`}><button>{ project.name }</button></Link></li> )
						})
					}
			        
			      </ul>
			      <Switch>
				      <Route exact path={`${match.url}/phpocean`} component={Phpocean} />
				      <Route exact path={`${match.url}/businessjug`} component={Businessjug} />
				      <Route exact path={`${match.url}/mygnfx`} component={Mygnfx} />
				      <Route exact path={`${match.url}/mycrowdsourcing`} component={mycrowdsourcing} />
				      <Route exact path={`${match.url}/nordjz`} component={nordjz} />
				      <Route exact path={`${match.url}/himconnect`} component={himconnect} />
				      <Route exact path={`${match.url}/bellhealthsolutions`} component={bellhealthsolutions} />
				      <Route exact path={`${match.url}/Libertychristianchurchpa`} component={Libertychristianchurchpa} />
				      <Route exact path={`${match.url}/webdevelopmentstarterkit`} component={webdevelopmentstarterkit} />
				      <Route exact path={`${match.url}/zooboole`} component={zooboole} />
				      <Route exact path={`${match.url}/banksofficial`} component={banksofficial} />
			      </Switch>
			    </div>
			  </Router>
		  </nav>
		</div>
	    <div className="scientists testimonies">
	    	<div className="container">
	    		<ul className="list">
		    		<li className="sci-profile"><p>A real guy. He's our man of the situation.</p> <em>Francis Banks</em> <strong>TalkMediaGhana.com</strong></li>
		    		<li className="sci-profile"><p>Certainly the right guy for any project requiring creativity.</p> <em>Ahmad Fayz</em> <strong>AS Ghana Ltd</strong></li>
		    		<li claassName="sci-profile"><p>No matter the project, I always come to zooboole first. It's more than necessary.</p> <em>Shadrack Mentowah</em> <strong>Connect Liberia Ltd</strong></li>
		    		<li className="sci-profile"><p>I always call him for most of my jobs. And we always come to an agreement with the price.</p> <em>Neema LD Neufville</em> <strong>Lumofa Ghana Ltd</strong></li>
		    		<li className="sci-profile"><p>Ahmed has always been part of our core people for any challenging projects.</p> <em>Chris Umunnabuike</em> <strong>Proquest Consulting Ltd</strong></li>
		    		<li className="sci-profile"><p>zooboole has no limit when it comes to what you want.</p> <em>John Egyawan</em> <strong>Yooodoo, LLC</strong></li>
		    	</ul>
	    	</div>
	    </div>
	</div>
);

const Phpocean = () => {
	return (
		<section>
			<div className="project-description">
				<p>A blog with more than 3000 members. Built in three months as a personal platform to share my discoveries in web development. I built the site's framework from scratch in PHP, designed it with HTM, CSS(SASS), and jQuery. (Gulp)</p>
				<ul className="project-details">
					<li><strong>Name:</strong> phpocean</li>
					<li><strong>Technologies:</strong> PHP, jQuery, SCSS, HTML</li>
					<li><strong>Stack:</strong>  MySQL, jQuery, PHP</li>
					<li><strong>Year:</strong>  2015</li>
					<li><strong>URL:</strong>  <a href="https://phpocean.com" target="_blank" rel="noopener noreferrer">phpocean.com</a></li>
				</ul>
			</div>
			<div className="project-preview">
				<img src={require('../images/works/phpocean.png')} alt="phpocean.com"/>
			</div>
		</section>
	)
}

const Businessjug = () => {
	return (
		<section>
			<div className="project-description">
				<p>A personal blog used to share business experiences and news in tech</p>
				<ul className="project-details">
					<li><strong>Name:</strong> businessjug</li>
					<li><strong>Frontend:</strong>  jQuery, HTML, SCSS, (Gulp)</li>
					<li><strong>Backend:</strong> PHP, MySQL, octoberCMS</li>
					<li><strong>Year:</strong>  2016</li>
					<li><strong>URL:</strong>  <a href="http://businessjug.com" target="_blank" rel="noopener noreferrer">businessjug.com</a></li>
				</ul>
			</div>
			<div className="project-preview">
				<img src={require('../images/works/businessjug.png')}  alt="businessjug.com"/>
			</div>
		</section>
	)
}

const Mygnfx = () => {
	return (
		<section>
			<div className="project-description">
				<p>An online Airtime, mobile money transfers platform. Mygnfx allows you to buy airtime and make Mobile Money transfer from/to all network operators in Ghana.</p>
				<ul className="project-details">
					<li><strong>Name:</strong> mygnfx</li>
					<li><strong>Frontend:</strong>  jQuery, HTML, SCSS, (Gulp)</li>
					<li><strong>Backend:</strong> PHP, MySQL</li>
					<li><strong>API:</strong> Hubtel, eTranzact</li>
					<li><strong>Year:</strong>  2017</li>
					<li><strong>URL:</strong>  <a href="http://mygnfx.com" target="_blank" rel="noopener noreferrer">mygnfx.com</a></li>
				</ul>
			</div>
			<div className="project-preview">
				<img src={require('../images/works/mygnfx.png')} alt="mygnfx.com" />
			</div>
		</section>
	)
}

const mycrowdsourcing = () => {
	return (
		<section>
			<div className="project-description">
				<p>Automated online networking marketing platform. Collects and distributes funds automatically.</p>
				<ul className="project-details">
					<li><strong>Name:</strong> mycrowdsourcing</li>
					<li><strong>Frontend:</strong> jQuery, HTML, SCSS, Bootstrap 3, (Bower)</li>
					<li><strong>Backend:</strong> PHP, MySQL</li>
					<li><strong>API:</strong> Hubtel</li>
					<li><strong>Year:</strong>  2017</li>
					<li><strong>URL:</strong>  <a href="http://mycrowdsourcing.org" target="_blank" rel="noopener noreferrer">mycrowdsourcing.org</a></li>
				</ul>
			</div>
			<div className="project-preview">
				<img src={require('../images/works/mycrowdsourcing.png')} alt="mycrowdsourcing.org" />
			</div>
		</section>
	)
}

const nordjz = () => {
	return (
		<section>
			<div className="project-description">
				<p>A talent management and fashion agency. Recrutes, trains and places models. The site is built as a CMS which allows them to manage their blog content, their models, and others features.</p>
				<ul className="project-details">
					<li><strong>Name:</strong> nordjz</li>
					<li><strong>Frontend:</strong>  jQuery, HTML, SCSS, (Gulp)</li>
					<li><strong>Backend:</strong> PHP, MySQL</li>
					<li><strong>Year:</strong>  2016</li>
					<li><strong>URL:</strong>  <a href="http://nordjz.com" target="_blank" rel="noopener noreferrer">nordjz.com</a></li>
				</ul>
			</div>
			<div className="project-preview">
				<img src={require('../images/works/nordz.png')} alt="nordz.com" />
			</div>
		</section>
	)
}

const himconnect = () => {
	return (
		<section>
			<div className="project-description">
				<p>Airtime sales platform built for HIM. The website allows its customers to subscribe to a cheap call package to Africa.</p>
				<ul className="project-details">
					<li><strong>Name:</strong> Him-Connect</li>
					<li><strong>Country:</strong> Cameroon</li>
					<li><strong>Frontend:</strong>  jQuery, HTML, SCSS, Bootstrap 3, (Gulp)</li>
					<li><strong>Backend:</strong> PHP, MySQL</li>
					<li><strong>Year:</strong>  2015</li>
					<li><strong>URL:</strong>  <a href="http://him-connect.com" target="_blank" rel="noopener noreferrer">him-connec.com</a></li>
				</ul>
			</div>
			<div className="project-preview">
				<img src={require('../images/works/himconnect.png')} alt="him-connect.com" />
			</div>
		</section>
	)
}

const bellhealthsolutions = () => {
	return (
		<section>
			<div className="project-description">
				<p>Bell Health Solutions is a USA-based NGO. It helps populations in health, education, and in getting clean water.</p>
				<ul className="project-details">
					<li><strong>Name:</strong> Bell Health Solutions</li>
					<li><strong>Country:</strong> USA</li>
					<li><strong>Frontend:</strong>  VanilaJS, HTML, SCSS, octoberCMS Theme, Bootstrap 4, (Gulp) </li>
					<li><strong>Backend:</strong> PHP, MySQL</li>
					<li><strong>Year:</strong>  2018</li>
					<li><strong>URL:</strong>  <a href="http://bellhealthsolutions.com" target="_blank" rel="noopener noreferrer">bellhealthsolutions.com</a></li>
				</ul>
			</div>
			<div className="project-preview">
				<img src={require('../images/works/bellhealthsolutions.png')} alt="bellhealthsolutions.com" />
			</div>
		</section>
	)
}

const Libertychristianchurchpa = () => {
	return (
		<section>
			<div className="project-description">
				<p>The official website of Liberty Christian Church, Pensilvania, USA. I bought the theme and transformed it into octoberCMS theme.</p>
				<ul className="project-details">
					<li><strong>Name:</strong> Liberty Christian Church, PA </li>
					<li><strong>Country:</strong> USA</li>
					<li><strong>Frontend:</strong> octoberCMS Theme</li>
					<li><strong>Backend:</strong> PHP, MySQL</li>
					<li><strong>Year:</strong>  2018</li>
					<li><strong>URL:</strong>  <a href="http://Libertychristianchurchpa.org" target="_blank" rel="noopener noreferrer">Libertychristianchurchpa.org</a></li>
				</ul>
			</div>
			<div className="project-preview">
				<img src={require('../images/works/libertychristianchurchpa.png')} alt="libertychristianchurchpa.org" />
			</div>
		</section>
	)
}

const webdevelopmentstarterkit = () => {
	return (
		<section>
			<div className="project-description">
				<p>A personal project. My first attempt to write a book. I sum up my experience in web development as a guide to the newcomers in the field.</p>
				<ul className="project-details">
					<li><strong>Name:</strong> Web Development Starter Kit </li>
					<li><strong>Frontend:</strong> HTML, SCSS, VanilaJS</li>
					<li><strong>Backend:</strong> PHP, Markdown, Slim Framework</li>
					<li><strong>Year:</strong>  2017</li>
					<li><strong>URL:</strong>  <a href="http://webdevelopmentstarterkit.com" target="_blank" rel="noopener noreferrer">webdevelopmentstarterkit.com</a></li>
				</ul>
			</div>
			<div className="project-preview">
				<img src={require('../images/works/webdevelopmentstarterkit.png')} alt="bellhealthsolutions.com" />
			</div>
		</section>
	)
}

const zooboole = () => {
	return (
		<section>
			<div className="project-description">
				<p>My portfolio.</p>
				<ul className="project-details">
					<li><strong>Name:</strong> zooboole.me </li>
					<li><strong>Frontend:</strong> ReactJS (HTML, CSS, ES6)</li>
					<li><strong>Year:</strong>  2018</li>
					<li><strong>URL:</strong>  <a href="http://zooboole.me" target="_blank" rel="noopener noreferrer">zooboole.me</a></li>
				</ul>
			</div>
			<div className="project-preview">
				<img src={require('../images/works/zooboole.png')} alt="zooboole.me" />
			</div>
		</section>
	)
}

const banksofficial = () => {
	return (
		<section>
			<div className="project-description">
				<p>The business & entertainment portfolio for Francis Amissa alias Banks.</p>
				<ul className="project-details">
					<li><strong>Name:</strong> Banks Offcial </li>
					<li><strong>Frontend:</strong> VanilaJS HTML, CSS</li>
					<li><strong>Backend:</strong> PHP, MySQL</li>
					<li><strong>Year:</strong>  2017</li>
					<li><strong>URL:</strong>  <a href="http://banksofficial.com" target="_blank" rel="noopener noreferrer">banksofficial.com</a></li>
				</ul>
			</div>
			<div className="project-preview">
				<img src={require('../images/works/banksofficial.png')} alt="zooboole.me" />
			</div>
		</section>
	)
}
export default Work;