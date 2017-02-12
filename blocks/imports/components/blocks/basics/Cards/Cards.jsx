import React from 'react';

// import './Cards.scss';

/**
*/
export const Card = (props) => {

	const classNames = [
		// 'round-3',
		'border-grey-90',
		'border-1',
		'valign-top',
		'disp-inline-block',
		'margin-r-8',
	].join(' ');

	return(
		<div className={classNames} style={props.style}>
			{props.children}
		</div>
	);
}

export const CardBanner = (props) => {

	const classNames = [
		'full-width',
		'bg-grey-97',
		'pad-12',
	].join(' ');

	return(
		<div className={classNames}>
			{props.children}
		</div>
	);
}

export const CardHeading = (props) => {

	const classNames = [
		// 'pad-12',
		'font-size-18',
		'font-sans',
		// 'font-weight-300',
	].join(' ');

	return(
		<div className={classNames} style={props.style}>
			{props.children}
		</div>
	);
}

export const CardParagraph = (props) => {

	const classNames = [
		'pad-12',
		'font-size-14',
		'font-sans',
		'line-height-20'
	].join(' ');

	return(
		<div className={classNames} style={props.style}>
			{props.children}
		</div>
	);
}
