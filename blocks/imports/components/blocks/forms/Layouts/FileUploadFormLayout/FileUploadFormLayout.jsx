import React from 'react';

import { Button } from '/imports/components/blocks/basics/Buttons/Buttons.jsx';

import './FileUploadFormLayout.scss';


export const FileUploadFormLayout = (props) => {
	const action = "#";
	return (
		<form className="file-upload-form-layout" style={props.style} action={action}>
			{props.children}
		</form>
	);
}


export class FileUploadInput extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			file: null,
			error: '',
			progress: '',
		}
	}

	handleFileChange(e) {
		e.preventDefault();

		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			if (file) {
				this.setState({'file':file});
			} else {
				this.setState({'error':'no file selected'});
			}
		}
	}

	handleUpload(e) {

		const file = this.state.file;
		console.log(file);
		if (file) {
			const uploadInstance = Uploads.insert({
				file: file,
				streams: 'dynamic',
				chunkSize: 'dynamic',
			}, false);

			uploadInstance.on('start', function() {
				console.log('started!');

			});

			uploadInstance.on('end', function(error, fileObj) {
				if (error) {
					this.setState({'error':error.reason});
					console.log('Error: '+error.reason);
				} else {
					console.log('File '+fileObj.name+' successfully uploaded!');
				}
			});

			uploadInstance.start();
		}
	}

	render() {

		return (
			<div>
				<label htmlFor="file-upload-input" className="replacement-file-input">Select File...</label>
				<input id="file-upload-input" className="file-input" type="file" onChange={this.handleFileChange.bind(this)} />

				{this.state.error ?
					<div className="message-text-error">{this.state.error}</div> :
					<div className="message-text-success">{this.state.progress}</div>
				}
				<div>{this.state.file ? this.state.file.name : null}</div>
				<Button onClickHandler={this.handleUpload.bind(this)}>Upload</Button>
			</div>
		);
	}
}
