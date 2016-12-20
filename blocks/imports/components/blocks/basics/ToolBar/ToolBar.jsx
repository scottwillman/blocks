import React from 'react';

import './ToolBar.scss';

/**
*/
export const ToolBar = (props) => {

	let className = "tool-bar-large";
	if (props.size === "small") {
		className = "tool-bar-small";
	}

	return(
		<div className={className} style={props.style}>
			{props.children}
		</div>
	);
}

export const ToolBarContainer = (props) => {

	let className = "tool-bar-left";
	switch (props.side) {
		case "left":
			className = "tool-bar-left";
			break;
		case "center":
			className = "tool-bar-center";
			break;
		case "right":
			className = "tool-bar-right";
			break;
	}

	return(
		<div className={className} style={props.style}>
			{props.children}
		</div>
	);
}
