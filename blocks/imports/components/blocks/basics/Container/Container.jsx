import React from 'react';


/**
*/
export const Container = (props) => {
	const classNames = [
		'width-full',
	].join(' ');

	return(
		<div className={classNames} style={props.style}>
			{props.children}
		</div>
	);
}
