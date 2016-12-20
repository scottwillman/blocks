import React from 'react';

import './Tags.scss';

/**
*/
export const Tag = (props) => {

	let className = "tag-black";
	if (props.flavor) className = "tag-"+props.flavor;

	return(
		<span className={className} style={props.style}>
			{props.children}
		</span>
	);
}
