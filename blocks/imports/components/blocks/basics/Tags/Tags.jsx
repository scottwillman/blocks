import React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { theme } from '/imports/components/blocks/base/themes.js';


export const Tag = (props) => {

	const themeStyles = StyleSheet.create(theme.tags.styles);

	return(
		<span className={css([themeStyles['_base'], themeStyles[props.color]])} style={props.style}>
			{props.children}
		</span>
	);
}
Tag.defaultProps = { color: theme.tags.defaultStyle };
