import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './styles.css'

import App from './App';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Price from './components/Price';
import Contacts from './components/Contacts';

ReactDOM.render(
	<Router history={hashHistory}>
		<IndexRoute path="/"  component={Home} />
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/Portfolio" component={Portfolio}/>
			<Route path="/Price" component={Price}/>
			<Route path="/Contacts" component={Contacts}/>
		</Route>
	</Router>, 
	document.getElementById('root'));

/*ReactDOM.render(<App initialData={todos} />, document.getElementById('root'));*/
