import React from 'react';

import { TextInput } from '../../Elements/TextInput.jsx';

import './SingleColumnFormLayout.scss';



export const SingleColumnFormLayout = (props) => {

	return (
		<div className="single-column-form-layout" style={props.style}>
			{props.children}
		</div>
	);

}


export const SingleColumnTextInput = (props) => {

	let inputClassName = "input-text";
	if (props.errorMessage) {
		inputClassName = "input-text-error";
	} else if (props.successMessage) {
		inputClassName = "input-text-success";
	}

	return (
		<div className="input-form-element" style={props.style}>
			<label htmlFor={props.name}>{props.label}</label>
			<span className="input-text-help">{props.helpText}</span>
			<TextInput
				className={inputClassName}
				name={props.name}
				value={props.value}
				validationCallback={props.validationCallback}
				doneTypingInterval={props.doneTypingInterval}
				placeholderText={props.placeholderText}
			/>
			{props.errorMessage ?
				<div className="message-text-error">{props.errorMessage}</div> :
				<div className="message-text-success">{props.successMessage}</div>
			}
		</div>
	);
}
