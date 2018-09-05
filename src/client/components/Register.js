import React from 'react';

class Register extends React.Component {
	render() {
		return (
			<form>
				<label>
					Email:
					<input type="text" />
				</label>
				<label>
					Password:
					<input type="text" />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default Register;