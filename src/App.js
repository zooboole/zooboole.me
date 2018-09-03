import React, { Component } from 'react';

import './styles/App.css';
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'
import Publications from './components/publications'
import About from './components/about'
import Work from './components/work'
import Resume from './components/resume'
import Quotes from './components/quotes'
import Contact from './components/contact'
import Terms from './components/terms'
import Disclaimer from './components/disclaimer'
import Article from './components/article'

import NoMatch from './components/NoMatch'
import {Helmet} from "react-helmet"
import ReactGA from 'react-ga'
// Router
import {
  BrowserRouter as Router, Route,
  // Link,
  Switch,
  // Redirect
} from 'react-router-dom'
ReactGA.initialize('UA-64588900-1')
ReactGA.pageview(window.location.pathname + window.location.search);
class App extends Component {

  fireTracking() {
      ReactGA.pageview(window.location.hash);
  }

  render() {
    const canonical = 'http://zooboole.me'
    return (
      <Router>
        <div className="App">
          <Helmet>
              <meta charSet="<utf></utf>-8" />
              <title>Welcome | zooboole</title>
              <link rel="canonical" href={canonical} />
          </Helmet>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/publications" component={Publications} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/quotes" component={Quotes} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/terms-and-conditions" component={Terms} />
            <Route exact path="/disclaimer" component={Disclaimer} />
            <Route exact path="/:slug" component={Article} />
            <Route component={NoMatch} />
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
