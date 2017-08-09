import React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { theme } from '/imports/components/blocks/base/themes.js';


theme = theme.Containers;


export const Container = (props) => {

	const themeStyles = StyleSheet.create(theme.Container.styles);

	return(
		<div className={css([themeStyles['_base'], themeStyles[props.flavor]])} style={props.style}>
			{props.children}
		</div>
	);
}
Container.defaultProps = { flavor: theme.Container.defaults.style };
