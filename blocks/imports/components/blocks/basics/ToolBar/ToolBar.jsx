import React from 'react';

// import './ToolBar.scss';

/**
*/
export const ToolBar = (props) => {

	const classNames = [
		'flex',
		'flex-justify-between',
		'bg-grey-90',
	].join(' ');

	return(
		<div className={classNames} style={props.style}>
			{props.children}
		</div>
	);
}

export const ToolBarContainer = (props) => {

	const classNames = [
		"flex",
		"flex-align-baseline"
	].join(' ');

	return(
		<div className={classNames} style={props.style}>
			{props.children}
		</div>
	);
}
