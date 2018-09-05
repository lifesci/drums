import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Account extends React.Component {
	render() {
		return (
			<div>
				<Link to="/Login">Log In</Link>
				<Link to="/register">Register</Link>
			</div>
		);
	}
}

export default Account;