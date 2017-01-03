import React from 'react';

import './Cards.scss';

/**
*/
export const Card = (props) => {
	return(
		<div className="card" style={props.style}>
			{props.children}
		</div>
	);
}

export const CardBanner = (props) => {
	return(
		<div className="card-banner">
			{props.children}
		</div>
	);
}

export const CardHeading = (props) => {
	return(
		<div className="card-heading" style={props.style}>
			{props.children}
		</div>
	);
}

export const CardParagraph = (props) => {
	return(
		<div className="card-paragraph" style={props.style}>
			{props.children}
		</div>
	);
}
