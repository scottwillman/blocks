import React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { theme } from '/imports/components/blocks/base/themes.js';


theme = theme.PageLayout;


export const PageLayout = (props) => {

	const themeStyles = StyleSheet.create(theme.PageLayout.styles);

	return(
		<div className={css([themeStyles['_base']])} style={props.style}>
			{props.children}
		</div>
	);
}
PageLayout.defaultProps = {};


export const PageHeader = (props) => {

	const themeStyles = StyleSheet.create(theme.PageHeader.styles);

	return(
		<div className={css([themeStyles['_base']])} style={props.style}>
			{props.children}
		</div>
	);
}
PageHeader.defaultProps = {};


export const PageFooter = (props) => {

	const themeStyles = StyleSheet.create(theme.PageFooter.styles);

	return(
		<div className={css([themeStyles['_base']])} style={props.style}>
			{props.children}
		</div>
	);
}
PageFooter.defaultProps = {};
