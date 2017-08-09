import React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { theme } from '/imports/components/blocks/base/themes.js';


theme = theme.ColumnLayout;


export const ColumnLayout = (props) => {

	const themeStyles = StyleSheet.create(theme.ColumnLayout.styles);

	return(
		<div className={css([themeStyles['_base']])} style={props.style}>
			{props.children}
		</div>
	);
}
ColumnLayout.defaultProps = {};


export const PrimaryColumn = (props) => {

	const themeStyles = StyleSheet.create(theme.PrimaryColumn.styles);
	const localStyles = StyleSheet.create({ // to allow control by props
		base: {
			"align-items": props.verticalAlign,
		},
	});

	return(
		<div className={css([themeStyles['_base'], localStyles['base']])} style={props.style}>
			{props.children}
		</div>
	);
}
PrimaryColumn.defaultProps = {};


export const SecondaryColumn = (props) => {

	const themeStyles = StyleSheet.create(theme.SecondaryColumn.styles);
	const localStyles = StyleSheet.create({ // to allow control by props
		base: {
			flex: "0 0 "+props.width,
			"align-items": props.verticalAlign,
		},
	});

	return(
		<div className={css([themeStyles['_base'], localStyles['base']])} style={props.style}>
			{props.children}
		</div>
	);
}
SecondaryColumn.defaultProps = {};
