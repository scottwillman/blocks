import React from 'react';



export class FileUploadInput extends React.Component {

	// constructor(props) {
	// 	super(props);
	//
	// 	this.state = {
	// 		file: null,
	// 		progress: '',
	// 	}
	// }
	//
	// handleFileChange(e) {
	// 	e.preventDefault();
	//
	// 	if (e.target.files && e.target.files[0]) {
	// 		const file = e.target.files[0];
	// 		if (file) {
	// 			this.setState({'file':file});
	// 		}
	// 	}
	// }

	// handleUpload(e) {
	//
	// 	const file = this.state.file;
	// 	if (file) {
	// 		const uploadInstance = Uploads.insert({
	// 			file: file,
	// 			streams: 'dynamic',
	// 			chunkSize: 'dynamic',
	// 		}, false);
	//
	// 		uploadInstance.on('start', function() {
	// 			console.log('started!');
	//
	// 		});
	//
	// 		uploadInstance.on('end', function(error, fileObj) {
	// 			if (error) {
	// 				this.setState({'error':error.reason});
	// 				console.log('Error: '+error.reason);
	// 			} else {
	// 				console.log('File '+fileObj.name+' successfully uploaded!');
	// 			}
	// 		});
	//
	// 		uploadInstance.start();
	// 	}
	// }

	render() {

		const labelStyle = {
			// border: "1px solid #ccc",
			display: "inline-block",
			// padding: ".5rem 1rem",
			cursor: "pointer",
		}

		return (
			<div>
				<label htmlFor="file-upload-input" style={labelStyle}>Select File...</label>
				<input id="file-upload-input" style={{'display':'none'}} type="file" onChange={this.props.handleFileChange.bind(this)} />
			</div>
		);
	}
}
