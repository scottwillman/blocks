import React from 'react';

/**
*/
export const SectionHeading = (props) => {

	const classNames = [
		'font-size-28',
		'font-sans',
	].join(' ');

	return(
		<h2 className={classNames} style={props.style}>
			{props.children}
		</h2>
	);
}

export const Heading = (props) => {

	const classNames = [
		'font-size-18',
		'font-sans',
	].join(' ');

	return(
		<h4 className={classNames} style={props.style}>
			{props.children}
		</h4>
	);
}

export const Paragraph = (props) => {

	const classNames = [
		'font-sans',
		'line-height-20',
	].join(' ');

	return(
		<p className={classNames} style={props.style}>
			{props.children}
		</p>
	);
}
