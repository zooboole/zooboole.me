import React from 'react';
import ReactDOM from 'react-dom';
// Inserting the main CSS
import './styles/_reset.css';
import './styles/index.css';

// Bringing in the main component
import App from './App';

// Bring inn the service worker
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

// Render 
ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
unregister()