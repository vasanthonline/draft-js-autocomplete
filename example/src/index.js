import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App content={'<p>Hi </p>'} />, document.getElementById('root'));
registerServiceWorker();
