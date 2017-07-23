import React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { theme } from '/imports/components/blocks/base/themes.js';



export const SidebarLayout = (props) => {

	const themeStyles = StyleSheet.create(theme.SidebarLayout.SidebarLayout.styles);

	return(
		<div className={css([themeStyles['_base']])} style={props.style}>
			{props.children}
		</div>
	);
}
SidebarLayout.defaultProps = {};



export const Sidebar = (props) => {

	const themeStyles = StyleSheet.create(theme.SidebarLayout.Sidebar.styles);
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
Sidebar.defaultProps = { width: "200px", verticalAlign: "top" };


export const Content = (props) => {

	const themeStyles = StyleSheet.create(theme.SidebarLayout.Content.styles);
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
Content.defaultProps = { verticalAlign: "top" };
