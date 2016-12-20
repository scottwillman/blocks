import React from 'react';

import './Typography.scss';

/**
*/
export const SectionHeading = (props) => {
	return(
		<h2 className="text-section-heading" style={props.style}>
			{props.children}
		</h2>
	);
}

export const Heading = (props) => {
	return(
		<h4 className="text-heading" style={props.style}>
			{props.children}
		</h4>
	);
}

export const Paragraph = (props) => {
	return(
		<p className="text-paragraph" style={props.style}>
			{props.children}
		</p>
	);
}
