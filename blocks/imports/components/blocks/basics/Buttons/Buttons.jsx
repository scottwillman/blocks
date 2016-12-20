import React from 'react';

import './Buttons.scss';

/**
@size: named size sm, md, lg
@isSubmit: boolean
@onClickHandler: function
@color: any valid css color identifier. For ex. rgb(0,0,0), #999999, red, etc.
*/
export const Button = (props) => {

	const btnType = props.isSubmit ? "submit" : "button";

	let flavor = "flavor";
	switch(props.flavor) {
		case "default-1":
			flavor = flavor+"-default-1";
			break;
		case "default-2":
			flavor = flavor+"-default-2";
			break;
		case "caution":
			flavor = flavor+"-caution";
			break;
		case "danger":
			flavor = flavor+"-danger";
			break;
		case "hollow":
			flavor = flavor+"-hollow";
			break;
		case "link":
			flavor = flavor+"-link";
			break;
		default:
			flavor = flavor+"-default-1";
	}

	let size = "size";
	switch(props.size) {
		case "small":
			size = size+"-small";
			break;
		case "large":
			size = size+"-large";
			break;
		default:
			size = size+"-medium";
	}


	const btnClassName = flavor+" "+size;

	return(
		<button type={btnType} className={btnClassName} onClick={props.onClickHandler} style={props.style}>
			{props.children}
		</button>
	);
}


/**
Expects buttons as children
*/
export const ButtonGroup = (props) => {
	return(
		<div className="btn-group">
			{props.children.map((child, n) => {
				return child;
			})}
		</div>
	);
}
