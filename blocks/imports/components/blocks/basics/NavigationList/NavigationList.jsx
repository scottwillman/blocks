import React from 'react';

import { StyleSheet, css } from 'aphrodite/no-important';
import { theme } from '/imports/components/blocks/base/themes.js';


export const NavigationList = (props, context) => {

	const themeStyles = StyleSheet.create(theme.NavigationList.NavigationList.styles);

	return(
		<ul className={css([themeStyles['_base'], themeStyles[props.orientation]])} style={props.style}>
			{React.Children.map(props.children, (child) => {
				switch (props.orientation) {
					case "horizontal":
						return <li className={css([themeStyles['horizontal']])} style={{"display":"inline"}}>{child}</li>;
						break;
					default:
						return <li className={css([themeStyles['vertical']])}>{child}</li>;
				}
			})}
		</ul>
	);
}
NavigationList.defaultProps = {
	"orientation": theme.NavigationList.NavigationList.defaults.orientation,
};
