import React from 'react';

class Drum extends React.Component {
	genSamples() {
		const totalSamples = 10;

		let samples = [
			(<option
				key={-1}
				hidden
				value="-1">
				Select a sample
			</option>)
		];

		for(var i = 0; i < totalSamples; i++) {
			samples.push(
				<option key={i} value={i}>{'test' + i}</option>
			);
		}

		return samples;
	}


	render() {
		const sample = this.props.sample;

		return (
			<div>
			<select value={sample} data-index={this.props.name} onChange={this.props.handleChange}>
				{this.genSamples()}
			</select>
			<button data-index={this.props.name} onClick={this.props.handleRemove}>
				Remove
			</button>
			</div>
		);
	}
}

export default Drum;