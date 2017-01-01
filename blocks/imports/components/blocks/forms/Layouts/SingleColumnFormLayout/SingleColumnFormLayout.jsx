import React from 'react';

import { TextInput } from '../../Elements/TextInput.jsx';

import './SingleColumnFormLayout.scss';



export const SingleColumnFormLayout = (props) => {

	let action = "#";
	if (props.action) action = props.action;

	return (
		<form className="single-column-form-layout" style={props.style} action={action}>
			{props.children}
		</form>
	);
}


// export const SingleColumnTextInput = (props) => {
export class SingleColumnTextInput extends React.Component {

	hasValueChanged() {
		return this.refs.input.hasValueChanged();
	}

	getValue() {
		return this.refs.input.getValue();
	}

	render() {

		let inputClassName = "input-text";
		if (this.props.errorMessage) {
			inputClassName = "input-text-error";
		} else if (this.props.successMessage) {
			inputClassName = "input-text-success";
		}

		return (
			<div className="input-form-element" style={this.props.style}>
				<label htmlFor={this.props.name}>{this.props.label}</label>
				<span className="input-text-help">{this.props.helpText}</span>
				<TextInput
					ref="input"
					className={inputClassName}
					name={this.props.name}
					value={this.props.value}
					validationCallback={this.props.validationCallback}
					doneTypingInterval={this.props.doneTypingInterval}
					placeholderText={this.props.placeholderText}
				/>
				{this.props.errorMessage ?
					<div className="message-text-error">{this.props.errorMessage}</div> :
					<div className="message-text-success">{this.props.successMessage}</div>
				}
			</div>
		);
	}
}
