import React from 'react';
import { Link } from 'react-router'

import { StyleSheet, css } from 'aphrodite/no-important';
import { theme } from '/imports/components/blocks/base/themes.js';


theme = theme.Typography;


export const SectionHeading = (props) => {

	const themeStyles = StyleSheet.create(theme.SectionHeading.styles);

	return(
		<h2 className={css([themeStyles['_base']])} style={props.style}>
			{props.children}
		</h2>
	);
}


export const Heading = (props) => {

	const themeStyles = StyleSheet.create(theme.Heading.styles);

	return(
		<h4 className={css([themeStyles['_base']])} style={props.style}>
			{props.children}
		</h4>
	);
}


export const Paragraph = (props) => {

	const themeStyles = StyleSheet.create(theme.Paragraph.styles);

	return(
		<p className={css([themeStyles['_base']])} style={props.style}>
			{props.children}
		</p>
	);
}

export const ALink = (props) => {

	const themeStyles = StyleSheet.create(theme.ALink.styles);

	return(
		<Link {...props} className={css([themeStyles['_base']])} style={props.style}>
			{props.children}
		</Link>
	);
}
