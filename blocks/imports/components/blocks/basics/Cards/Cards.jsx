import React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { theme } from '/imports/components/blocks/base/themes.js';


theme = theme.Cards;

// export const CardLayout = (props) => {
//
// 	const themeStyles = StyleSheet.create(theme.cardLayout.styles);
//
// 	return(
// 		<div className={css([themeStyles['_base']])} style={props.style}>
// 			{props.children}
// 		</div>
// 	);
// };
// CardLayout.defaultProps = {};


export const Card = (props) => {

	const themeStyles = StyleSheet.create(theme.Card.styles);

	return(
		<div className={css([themeStyles['_base'], themeStyles[props.flavor]])} style={props.style}>
			{props.children}
		</div>
	);
}
Card.defaultProps = { flavor: theme.Card.defaults.style };


// export const CardBanner = (props) => {
//
// 	const styles = StyleSheet.create({
// 		base: {
// 			// width: "100%",
// 		},
// 	});
// 	const themeStyles = StyleSheet.create(theme.cardBanner.styles);
//
// 	return(
// 		<div className={css([styles.base, themeStyles[props.flavor]])} style={props.style}>
// 			{props.children}
// 		</div>
// 	);
// }
// CardBanner.defaultProps = { flavor: theme.cardBanner.defaultStyle };
//
//
// export const CardHeading = (props) => {
//
// 	// const classNames = [
// 	// 	// 'pad-12',
// 	// 	'font-size-18',
// 	// 	'font-sans',
// 	// 	// 'font-weight-300',
// 	// ].join(' ');
//
// 	const styles = StyleSheet.create({
// 		base: {
//
// 		},
// 	});
// 	const themeStyles = StyleSheet.create(theme.cardHeading.styles);
//
// 	return(
// 		<div className={css([styles.base, themeStyles[props.flavor]])} style={props.style}>
// 			{props.children}
// 		</div>
// 	);
// }
// CardHeading.defaultProps = { flavor: theme.cardHeading.defaultStyle };
//
//
// export const CardParagraph = (props) => {
//
// 	// const classNames = [
// 	// 	'pad-12',
// 	// 	'font-size-14',
// 	// 	'font-sans',
// 	// 	'line-height-20'
// 	// ].join(' ');
// 	const styles = StyleSheet.create({
// 		base: {
//
// 		},
// 	});
// 	const themeStyles = StyleSheet.create(theme.cardParagraph.styles);
//
// 	return(
// 		<div className={css([styles.base, themeStyles[props.flavor]])} style={props.style}>
// 			{props.children}
// 		</div>
// 	);
// }
// CardParagraph.defaultProps = { flavor: theme.cardParagraph.defaultStyle };
