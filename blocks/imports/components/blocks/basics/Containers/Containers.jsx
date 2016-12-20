import React from 'react';

import './Containers.scss';

/**
*/
export const PageContainer = (props) => {

	const containerClass = props.fullWidth ? "page-container-full" : "page-container";

	return(
		<div className={containerClass} style={props.style}>
			{props.children}
		</div>
	);
}


/**
*/
export const Container = (props) => {

	return(
		<div className="container" style={props.style}>
			{props.children}
		</div>
	);
}
