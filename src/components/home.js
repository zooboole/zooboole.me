import  React, { Component } from 'react'

import logo from '../images/OrGate.png'
import Quote from './quote'
import Profile from './profile'
import Scientists from './scientists'


class Home extends Component {
	 constructor(props) {
    super(props)
    this.state = {
      scientists: []
    }
  }
  componentWillMount(){
    document.title='Welcome | zooboole'
  }
  componentDidMount(){
   // Set some static data for now
    // Handle this later with a database
    // list of scientists
    const list = [
        {
          id: Math.random(),
          name: 'George Boole',
          time: '1815 - 1864',
          avatar: 'George_Boole.jpeg',
          function: 'Mathematician'
        },
        {
          id: Math.random(),
          name: 'Andrew Tanenbaum',
          time: 'March 16, 1944',
          avatar: 'Andrew_Tanenbaum.jpeg',
          function: 'Scientist'
        },
        {
          id: Math.random(),
          name: 'John von Neumann',
          time: '1903 - 1957',
          avatar: 'John_von_Neumann.jpeg',
          function: 'Mathematician'
        },
        {
          id: Math.random(),
          name: 'Ahmed Salifou Amidou',
          time: 'January 1, 1989',
          avatar: 'zooboole.jpg',
          function: 'Ambitious',
          zoom: true
        },
        {
          id: Math.random(),
          name: 'Muhammad al-Khwarizmi',
          time: '-850 AD',
          avatar: 'Muhammad_ibn_Musa_al-Khwarizmi.jpeg',
          function: 'Scholar'
        },
        {
          id: Math.random(),
          name: 'Edsger W. Dijkstra',
          time: '1930 - 2002',
          avatar: 'Edsger_W_Dijkstra.jpeg',
          function: 'Essayist'
        },
        {
          id: Math.random(),
          name: 'Gerald Jay Sussman',
          time: 'February 8, 1947',
          avatar: 'Gerald_Jay_Sussman.jpeg',
          function: 'Professor'
        }
    ]

    this.setState({
      scientists: list,
    })
  }
	render() {
		 // set the  today's quote as a static object
		const quote = {
		  message: 'Information is not knowledge. The only source of knowledge is experience.',
		  author: 'Albert Einstein'
		}
		return (
        <div className="content">
  				<Quote quote={quote.message} author={quote.author}/>
  				<Profile logo={logo} />
  				<Scientists list={this.state.scientists} />
				</div>
			);
	}
}

export default Home;