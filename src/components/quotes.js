import  React from 'react'
import {Helmet} from "react-helmet";
import Quote from './quote'

import '../styles/quotes.css'

// Quote of the page
const quote = {
  message: 'The System is the Solution.',
  author: 'AT&T'
}
// Data: works. This could be fetched from a database
const quoteLlist = [
	{
		id: Math.random(),
		quote: "Learn how to say 'I don't know'. It's the best knowledge.",
	},
	{
		id: Math.random(),
		quote: "It's not ideas or ideals we lack in Africa, but the 'time' to exercise them.",
	},
	{
		id: Math.random(),
		quote: "Women make new humans, and teachers teach them how to live and die.",
	},
	{
		id: Math.random(),
		quote: 'Man cannot create for man.',
	},
	{
		id: Math.random(),
		quote: "Learning is something to learn.",
	},
	{
		id: Math.random(),
		quote: "It's only through your work you can express your true worth.",
	},
	{
		id: Math.random(),
		quote: "A suit is not enough to cover up a great brain.",
	},
	{
		id: Math.random(),
		quote: "Helping always helps.",
	},
	{
		id: Math.random(),
		quote: "Habit kills.",
	},
	{
		id: Math.random(),
		quote: "In time, there will be few we will need to know.",
	},
	{
		id: Math.random(),
		quote: "You will surely be forgotten if you do something to be remembered.",
	},
]

const Citations = ({match}) => (
	<div className="about">
			<Helmet>
              <meta charSet="<utf></utf>-8" />
              <title>My quotes | zooboole</title>
	        </Helmet>

			<Quote quote={quote.message} author={quote.author}/>

			<div className="work-intro">
				<div className="container">
					<p>As a writer and a lecturer, I tend to bring out some wisdom out from time to time. I am sharing with you a few here.</p>
				</div>
			</div>
			<section className="quotes">
				<div className="container">
					{
						quoteLlist.map(quote => {
							return (
								<blockquote>
									<p>{quote.quote}</p>
								</blockquote>
							)
						})
					}
				</div>
			</section>
		
	</div>
);

export default Citations;