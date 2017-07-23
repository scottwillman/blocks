import React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { theme } from '/imports/components/blocks/base/themes.js';



export const PageLayout = (props) => {

	const themeStyles = StyleSheet.create(theme.PageLayout.PageLayout.styles);

	return(
		<div className={css([themeStyles['_base']])} style={props.style}>
			{props.children}
		</div>
	);
}
PageLayout.defaultProps = {};


export const Header = (props) => {

	const themeStyles = StyleSheet.create(theme.PageLayout.Header.styles);

	return(
		<div className={css([themeStyles['_base']])} style={props.style}>
			{props.children}
		</div>
	);
}
Header.defaultProps = {};


export const Footer = (props) => {

	const themeStyles = StyleSheet.create(theme.PageLayout.Footer.styles);

	return(
		<div className={css([themeStyles['_base']])} style={props.style}>
			{props.children}
		</div>
	);
}
Footer.defaultProps = {};
