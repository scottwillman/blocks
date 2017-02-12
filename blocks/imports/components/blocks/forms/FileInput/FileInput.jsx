import React from 'react';



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

		let classNames = [
			'cursor-pointer',
			'disp-inline-block',
			'margin-r-6',
		];

		switch (this.props.flavor) {
			case 'dark':
				classNames = classNames.concat([
					'text-white',
					'button-flavor-dark',
				]);
				break;
			default:
				classNames = classNames.concat([
					'button-flavor-light',
				]);
				break;
		}


		switch (this.props.size) {
			case 'small':
				classNames = classNames.concat([
					'font-size-12',
					'pad-lr-8',
					'pad-tb-6',
					'round-3',
				]);
				break;
			case 'large':
				classNames = classNames.concat([
					'font-size-18',
					'pad-lr-20',
					'pad-tb-12',
					'round-4',
				]);
				break;
			default: // medium or empty
				classNames = classNames.concat([
					'font-size-14',
					'pad-lr-16',
					'pad-tb-8',
					'round-4',
				]);
				break;
		}

		const filenameClassName = [
			'disp-inline-block',
		].join(' ');

		return(
			<div className="file-input">

				<label htmlFor="file-input" className={classNames.join(' ')} style={this.props.style}>{this.props.children}</label>
				<input id="file-input" style={{'display':'none'}} type="file" onChange={this.handleFileChange.bind(this)} />

				<div className={filenameClassName}>{this.__showFileName()}</div>
			</div>
		);
	}
}
FileInput.defaultProps = { 'flavor': 'default-1', 'size': 'medium'};
