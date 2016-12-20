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
	if (props.error) inputClassName = "input-text-error";

	return (
		<div className="input-form-element" style={props.style}>
			<label htmlFor={props.name}>{props.label}</label>
			<TextInput className={inputClassName} name={props.name} />
			<div className="input-form-error">{props.error}</div>

		</div>
	);
}
