import React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { theme } from '/imports/components/blocks/base/themes.js';



export const SectionHeading = (props) => {

	const themeStyles = StyleSheet.create(theme.sectionHeading.styles);

	return(
		<h2 className={css([themeStyles['_base']])} style={props.style}>
			{props.children}
		</h2>
	);
}


export const Heading = (props) => {

	const themeStyles = StyleSheet.create(theme.heading.styles);

	return(
		<h4 className={css([themeStyles['_base']])} style={props.style}>
			{props.children}
		</h4>
	);
}


export const Paragraph = (props) => {

	const themeStyles = StyleSheet.create(theme.paragraph.styles);

	return(
		<p className={css([themeStyles['_base']])} style={props.style}>
			{props.children}
		</p>
	);
}
