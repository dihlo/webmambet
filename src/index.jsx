import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './styles.css'

import App from './App';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			
		</Route>
	</Router>, 
	document.getElementById('root'));

/*ReactDOM.render(<App initialData={todos} />, document.getElementById('root'));*/
