import React from 'react';

import { BaseFileInput } from '/imports/components/blocks/forms/BaseElements/BaseFileInput.jsx';

import './FileInput.scss';

export class FileInput extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			'file': null,
		}
	}

	getValue() {
		return this.state.file;
	}

	handleFileChange(e) {
		e.preventDefault();

		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			if (file) {
				this.setState({'file':file});
				console.log(file);
			}
		}
	}

	__showFileName() {
		return (this.state.file) ? this.state.file.name : '';
	}

	render() {
		const labelStyle = {
			display: "inline-block",
			cursor: "pointer",
			marginRight: ".5rem",
		}
		const labelButtonClassName = this.props.flavor+" "+this.props.size;

		return(
			<div className="file-input">

				<label htmlFor="file-input" className={labelButtonClassName} style={labelStyle}>{this.props.children}</label>
				<input id="file-input" style={{'display':'none'}} type="file" onChange={this.handleFileChange.bind(this)} />

				<div className="filename">{this.__showFileName()}</div>
			</div>
		);
	}
}
FileInput.defaultProps = { 'flavor': 'default-1', 'size': 'medium'};
