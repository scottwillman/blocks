import React from 'react';


export const Caret = (props) => {

	const size = parseInt(props.size);

	const arrowClassNames = [
		'w-0',
		'h-0',
		'cursor-pointer',
		props.isActive ? 'border-blue' : 'border-grey-60',
	].join(' ');

	const baseEdge = [
		props.size,
		"solid",
	].join(' ');

	const secondaryEdge = [
		(Math.round(size * .7)).toString() + "px",
		"solid",
		"transparent",
	].join(' ');

	let arrowStyle = null;

	switch (props.direction) {
		case "up":
			arrowStyle = {
				'borderLeft':   secondaryEdge,
				'borderRight':  secondaryEdge,
				'borderBottomWidth': props.size,
				'borderBottomStyle': "solid",
			};
			break;
		case "down":
			arrowStyle = {
				'borderLeft':  secondaryEdge,
				'borderRight': secondaryEdge,
				'borderTopWidth': props.size,
				'borderTopStyle': "solid",
			};
			break;
		case "left":
			arrowStyle = {
				'borderBottom': secondaryEdge,
				'borderRight':  baseEdge,
				'borderTop':    secondaryEdge,
			};
			break;
		case "right":
			arrowStyle = {
				'borderLeft':   baseEdge,
				'borderBottom': secondaryEdge,
				'borderTop':    secondaryEdge,
			};
			break;
	}

	const allStyles = Object.assign(arrowStyle, props.style);

	return(
		<div className={arrowClassNames} style={allStyles} onClick={props.onClickHandler}></div>
	);
}
