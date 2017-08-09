import React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { theme } from '/imports/components/blocks/base/themes.js';


theme = theme.Tags;


export const Tag = (props) => {

	const themeStyles = StyleSheet.create(theme.Tag.styles);

	return(
		<span className={css([themeStyles['_base'], themeStyles[props.flavor]])} style={props.style}>
			{props.children}
		</span>
	);
}
Tag.defaultProps = { flavor: theme.Tag.defaults.style };
