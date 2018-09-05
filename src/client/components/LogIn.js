import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			emailValid: false,
			passwordValid: false,
			formValid: false,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		e.preventDefault();
		const name = e.target.name;
		const value = e.target.value;

		this.setState({
			[name]: value,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const username = this.state.username;
		const password = this.state.password;

		let data = {
			username: username,
			password: password,
		};

		fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
	            'Content-Type': 'application/json',
        	},
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Username:
					<input type="text" name="username" onChange={this.handleChange} />
				</label>
				<label>
					Password:
					<input type="text" name="password" onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default Login;