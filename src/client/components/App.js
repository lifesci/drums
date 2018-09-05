import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Manager from './Manager.js';
import Account from './Account.js';
import Login from './Login.js';
import Register from './Register.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'loggedIn': false,
		};
	}

	logIn() {
		this.setState({
			loggedIn: false,
		});
	}

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route path="/kits" component={Manager}/>
						<Route path="/login" component={Login} />
						<Route path="/" component={Account}/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;