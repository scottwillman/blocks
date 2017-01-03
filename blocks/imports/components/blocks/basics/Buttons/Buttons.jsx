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
	const btnClassName = props.flavor+" "+props.size;

	return(
		<button type={btnType} className={btnClassName} onClick={props.onClickHandler} style={props.style}>
			{props.children}
		</button>
	);
}
Button.defaultProps = { 'flavor': 'default-1', 'size': 'medium'};


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
