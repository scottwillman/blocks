import React from 'react';

// import './Buttons.css';

/**
@size: named size sm, md, lg
@isSubmit: boolean
@onClickHandler: function
@color: any valid css color identifier. For ex. rgb(0,0,0), #999999, red, etc.
*/
export const Button = (props) => {

	const btnType = props.isSubmit ? "submit" : "button";
	// const btnClassName = props.flavor+" "+props.size;

	let classNames = [
		'cursor-pointer',
	];

	switch (props.flavor) {
		case 'dark':
			classNames = classNames.concat([
				// 'bg-black',
				'text-white',
				// 'border-black',
				'button-flavor-dark',
			]);
			break;
		default:
			classNames = classNames.concat([
				'button-flavor-light',
			]);
			break;
	}


	switch (props.size) {
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


	return(
		<button type={btnType} className={classNames.join(' ')} onClick={props.onClickHandler} style={props.style}>
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
		<div className="button-group" style={props.style}>
			{props.children.map((child, n) => {
				return child;
			})}
		</div>
	);
}
