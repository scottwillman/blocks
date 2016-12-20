import React from 'react';
import { Link } from 'react-router'

import './NavigationLists.scss';

/**
*/
export const VerticalNavigationList = (props) => {
	return(
		<ul className="vertical-navigation-list" style={props.style}>
			{props.children}
		</ul>
	);
}

export const HorizontalNavigationList = (props) => {
	return(
		<ul className="horizontal-navigation-list" style={props.style}>
			{props.children}
		</ul>
	);
}


export const NavListHeading = (props) => {
	return(
		<li className="nav-list-heading" style={props.style}>
			{props.children}
		</li>
	);
}

export const NavListText = (props) => {
	return(
		<li className="nav-list-text" style={props.style}>
			{props.children}
		</li>
	);
}

export class NavListLink extends React.Component {
	render() {
		let isActive  = this.context.router.isActive(this.props.to, true);

		let className = "nav-list-link";
		let style     = this.props.inactiveStyle;

		if (isActive) {
			className = "nav-list-link-active";
			style     = this.props.activeStyle;
		}

		return(
			<li className={className} style={style}>
				<Link to={this.props.to}>{this.props.children}</Link>
			</li>
		);
	}
}
NavListLink.contextTypes = {
	router: React.PropTypes.object.isRequired,
}
