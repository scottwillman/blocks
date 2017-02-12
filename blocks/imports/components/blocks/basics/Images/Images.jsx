import React from 'react';

// import './Images.scss';

/**
*/
export const Image = (props) => {

	if (props.responsive) {

		const respStyle = {
			backgroundImage: 'url('+props.src+')',
			height: props.height,
			width: props.width || "100%",
		}

		_.extend(respStyle, props.style);

		return <div className="image-responsive" style={respStyle}></div>

	} else {
		return <img src={props.src} style={props.style} />
	}
}
