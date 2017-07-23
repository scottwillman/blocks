import React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { theme } from '/imports/components/blocks/base/themes.js';




export const Button = (props) => {

	const btnType = props.isSubmit ? "submit" : "button";

	const themeStyles = StyleSheet.create(theme.Buttons.Button.styles);
	const themeSizes  = StyleSheet.create(theme.Buttons.Button.sizes);

	return(
		<button type={btnType} className={css([themeStyles['_base'], themeStyles[props.color], themeSizes[props.size]])} onClick={props.onClickHandler} style={props.style}>
			{props.children}
		</button>
	);
}
Button.defaultProps = { 'color': theme.Buttons.Button.defaultStyle, 'size': theme.Buttons.Button.defaultSize };




/**
Expects Buttons as children

TODO: Add controls props to set the sizing of the buttons in the group from this level
*/
export const ButtonGroup = (props) => {

	const themeStyles = StyleSheet.create(theme.Buttons.Group.styles);

	return(
		<div className={css(themeStyles['_base'])} style={props.style}>
			{props.children.map((child, n) => {
				return child;
			})}
		</div>
	);
}
ButtonGroup.defaultProps = {};
