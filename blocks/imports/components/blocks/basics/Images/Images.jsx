import React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { theme } from '/imports/components/blocks/base/themes.js';


theme = theme.Images;


export const Image = (props) => {

	if (props.responsive) {

		const themeStyles = StyleSheet.create(theme.Image.styles);
		const localStyles = StyleSheet.create({
			base: {
				backgroundImage: 'url('+props.src+')',
				height: props.height,
				width: props.width,
			}
		});

		return <div className={css([themeStyles['_base'], localStyles['base']])} style={props.style}></div>

	} else {
		return <img src={props.src} style={props.style} />
	}
}
Image.defaultProps = { responsive: False, width: "100%" };
