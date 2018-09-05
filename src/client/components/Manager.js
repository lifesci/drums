import React from 'react';
import Drum from './Drum.js';

class Manager extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [
				{
					drumCount: 0,
					drums: [],
				}
			],
			historyIndex: 0,
		};

		this.addDrum = this.addDrum.bind(this);
		this.removeDrum = this.removeDrum.bind(this);
		this.undo = this.undo.bind(this);
		this.setSample = this.setSample.bind(this);
		this.renderDrums = this.renderDrums.bind(this);
	}

	addDrum() {
		const history = this.state.history;
		const historyIndex = this.state.historyIndex;
		const curState = history[historyIndex];
		const curDrums = curState.drums;
		const drumCount = curState.drumCount;

		let newDrum = {
			key: drumCount,
			name: drumCount,
			active: true,
			sample: -1,
		};

		let drums = this.copyArrOfObj(curDrums).concat([newDrum]);

		this.setState({
			history: history.slice(0, historyIndex + 1).concat([{
				drums: drums,
				drumCount: drumCount + 1,
			}]),
			historyIndex: historyIndex + 1,
		});
	}

	removeDrum(e) {
		const history = this.state.history;
		const historyIndex = this.state.historyIndex;
		const curState = history[historyIndex];
		const curDrums = curState.drums;
		const drumCount = curState.drumCount;
		const i = e.target.dataset.index;

		let updatedDrums = this.copyArrOfObj(curDrums);
		updatedDrums.splice(i, 1);

		this.setState({
			history: history.slice(0, historyIndex + 1).concat([{
				drums: updatedDrums,
				drumCount: drumCount - 1,
			}]),
			historyIndex: historyIndex + 1,
		});
	}

	undo() {
		const historyIndex = this.state.historyIndex;

		if(historyIndex > 0) {
			this.setState({
				historyIndex: historyIndex - 1,
			});
		}
	}

	setSample(e) {
		const history = this.state.history;
		const historyIndex = this.state.historyIndex;
		const curState = history[historyIndex];
		const curDrums = curState.drums;
		const drumCount = curState.drumCount;
		const i = e.target.dataset.index;

		let value = parseInt(e.target.value, 10);
		let updatedDrums = this.copyArrOfObj(curDrums);
		updatedDrums[i].sample = value;

		this.setState({
			history: history.slice(0, historyIndex + 1).concat([{
				drums: updatedDrums,
				drumCount: drumCount,
			}]),
			historyIndex: historyIndex + 1,
		});
	}

	copyArrOfObj(arr) {
		let copy = [];

		for(let i = 0; i < arr.length; i++) {
			let obj = arr[i];
			copy.push({...obj});
		}

		return copy;
	}

	renderDrums(drums) {
		let set = [];

		for(let i = 0; i < drums.length; i++) {
			const drum = drums[i];
			const sample = drum.sample;
			if(drum.active) {
				set.push(
					<Drum
						key={i}
						name={i}
						sample={sample}
						handleRemove={this.removeDrum}
						handleChange={this.setSample}
					/>
				);
			}
		}

		return set;
	}

	render() {
		const history = this.state.history;
		const historyIndex = this.state.historyIndex;
		const curDrums = history[historyIndex].drums;

		return (
			<div>
				<button onClick={() => this.addDrum()}>Add Drum</button>
				<button onClick={() => this.undo()}>Undo</button>
				<div>
					{this.renderDrums(curDrums)}
				</div>
			</div>
		);
	}
}

export default Manager;