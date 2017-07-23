import React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { theme } from '/imports/components/blocks/base/themes.js';


export const Caret = (props) => {

	const size = parseInt(props.size);

	const baseEdgeStyle      = (Math.round(size * .7)).toString() + "px solid";
	const secondaryEdgeStyle = (Math.round(size * .7)).toString() + "px solid transparent";

	let edgeStyle = null;

	switch (props.direction) {
		case "up":
			edgeStyle = {
				'borderLeft':   secondaryEdgeStyle,
				'borderRight':  secondaryEdgeStyle,
				'borderBottomWidth': props.size,
				'borderBottomStyle': "solid",
			});
			break;
		case "down":
			edgeStyle = {
				'borderLeft':  secondaryEdgeStyle,
				'borderRight': secondaryEdgeStyle,
				'borderTopWidth': props.size,
				'borderTopStyle': "solid",
			};
			break;
		case "left":
			edgeStyle = {
				'borderBottom': secondaryEdgeStyle,
				'borderRight':  baseEdgeStyle,
				'borderTop':    secondaryEdgeStyle,
			};
			break;
		case "right":
			edgeStyle = {
				'borderLeft':   baseEdgeStyle,
				'borderBottom': secondaryEdgeStyle,
				'borderTop':    secondaryEdgeStyle,
			};
			break;
	}

	const themeStyles = StyleSheet.create(theme.Caret.Caret.styles);
	const localStyles = StyleSheet.create(edgeStyle);

	return(
		<div className={css([themeStyles['_base']])} style={props.style} onClick={props.onClickHandler}></div>
	);
}
Caret.defaultProps = { direction: "up", size: "10px" };
