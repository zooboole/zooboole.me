import  React from 'react'
import {Helmet} from "react-helmet";
import Quote from './quote'
import '../styles/work.css'
import '../styles/resume.css'

// Quote of the page
const quote = {
  message: 'The best way to predict the future is to invent it.',
  author: 'Alan Kay'
}

const experiences = [
	{
		role: 'Graphic Designer',
		company: 'Superprice.com',
		year: 2017,
		description: "I was in charge of the research of products images, images editing, and the quality control. In the same role, I was in charge of designing the website's banners, flyers, and packaging design. I also contributed to the site's data entries."
	},
	{
		role: 'Web Developer',
		company: 'Trans Africa College',
		year: '2015 - 2016',
		description: "I was in charge of the school's presence on the web. I was part and lead of the team that was responsible for the development of the school's website development. I also contributed to the design and printing of the school's banners, flyers. I integrated the online registration and students' selection on the website."
	},
	{
		role: 'Lead Software Engineer',
		company: 'ProQuest Consulting Ltd',
		year: '2013 - 2015',
		description: "Under this responsibility, I developed several websites for clients such as Derby Company Ltd, Azar Chemicals, Shield Premium. I was also the lead developer of the desktop application called Kokompe which was used to manage several stores dealing in car spare parts."
	},
	{
		role: 'Teacher',
		company: 'Developers In Vogue',
		year: '2017',
		description: "I taught HTM, CSS, and Javascript to the first batch of Developers In Vogue."
	},
	{
		role: 'Lecturer Assistant',
		company: 'NIIT',
		year: '2013',
		description: "I assisted my lecturer in his web development class at NIIT. Under this function I tought HTML, CSS, and PHP."
	},
]


const Skills = () => (
	<div className="about">
			<Helmet>
              <meta charSet="<utf></utf>-8" />
              <title>Resume | zooboole</title>
	        </Helmet>

			<Quote quote={quote.message} author={quote.author}/>

			<div className="work-intro">
				<div className="container">
					<p>Hard working and self-taught Software Engineer with proven coding and management experience. I seek to apply my abilities to develop and maintain complex websites, applications, APIs, and keep an eye on the wellness of existing projects. </p>
					<p>I can create clean interfaces, and also handle the backend services as well using PHP and Javascript as my core technologies. I am a versatile and bilingual(French, English) developer who pays good attention to a minute details while having clear vision of the overall idea.</p>
					<p>I have built several projects ranging from simple static websites to full fledged business websites and desktop applications. Through that routine, I have acquired a good experience in team work and in software development lifecycle.</p>
					<p><a href="https://drive.google.com/file/d/1Fp6DFBsYRg9GS1n7FGVBSQB_xkV9PXHG/view?usp=sharing" className="button">Download my resum&eacute;</a></p>
				</div>
			</div>
			<section className="cv skills">
				<div className="container">
					<h2>Technical Skills</h2>
					<p>Experience in Technical Writing, Training/Education, Software Engineering, and E-Commerce.</p>
					<strong>Frontend: </strong> Graphic Designing, User Experience(UX), User Interface(UI)<br/>
					<strong>Backend: </strong> Data Modeling, Back Office Design<br/>
					<strong>API Specs: </strong> SOAP, REST, GraphQL<br/>
					<strong>Programming Technologies: </strong> PHP, SQL, Slim Framework, Laravel, Javascript, HTML, CSS(SASS), C, ReactJS<br/>
				</div>
			</section>

			<section className="cv experiences">
				<div className="container">
					<h2>Experience</h2>
					{
						experiences.map( experience => {
							return ( <div className="project">
								<h3>{ experience.role } at { experience.company } { experience.year }</h3>
								<p>{ experience.description }</p>
							</div> )
						} )
					}
					
				</div>
			</section>

			<section className="cv projects">
				<div className="container">
					<h2>Projects</h2>
					<div className="project">
						<h3>Phpocean, 2015 - Present</h3>
						<p>I started working on this project while I was still a student at NIIT Ghana. I created it as a learning aid for my friends and for myself. Since then, I kept on maintaining the project up to now. It taught me how to plan, design, code such projects, and especially how to accept criticism. I learned how to integrate PayPal's payment API through the website.</p>
					</div>
					<div className="project">
						<h3>oYakoo.com, 2008 - 2016</h3>
						<p>I created an ran this e-commerce website. With this project, we were able to deliver items in France, Gabon, Cameroon, Morocco, and in Benin. It's my first real project. I have built the website more than three times using CSS, HTML, Javascript, and PHP backed up with MySQL.</p>
					</div>
					<div className="project">
						<h3>Cecile Foundation, 2011 - 2012</h3>
						<p>We organized an open and free training in computing fundamental. At the end of the training, which lasted two months per batch, we were able to certify more than 30 people who got jobs with it. I was the principal Lecturer and organizer. I taught computer organization, Microsoft Office Word, Excel, Access (2009, 2010), and graphics basics.</p>
					</div>
				</div>
			</section>

			<section className="cv education">
				<div className="container">
					<h2>Education</h2>
					<ul>
						<li><strong>NIIT</strong>, Diploma in Web Designing & Development, 2014</li>
						<li><strong>ICM, UK</strong>, Diploma in English Language Proficiency, 2013</li>
						<li><strong>Infoworld Professional Institute</strong>, Diploma in English Language Proficiency , 2013</li>
						<li><strong>NIIT</strong>, Certificate in Graphic Designing, 2012</li>
						<li><strong>Self-Tought Programmer & Electronician</strong>, Since 2002</li>
					</ul>
				</div>
				<div className="download">
					<div className="container">
						<p><a href="https://drive.google.com/file/d/1Fp6DFBsYRg9GS1n7FGVBSQB_xkV9PXHG/view?usp=sharing" className="button">Download my resum&eacute;</a></p>
					</div>
				</div>
			</section>

	</div>
);
export default Skills;