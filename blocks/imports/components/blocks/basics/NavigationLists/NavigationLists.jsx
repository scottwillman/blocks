import React from 'react';
import { Link } from 'react-router'

// import './NavigationLists.scss';

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

	const classNames = [
		'pad-8',
		'font-size-16',
		'text-grey-30',
	].join(' ');

	return(
		<li className={classNames} style={props.style}>
			{props.children}
		</li>
	);
}

export const NavListText = (props) => {

	const classNames = [
		'pad-lr-8',
		'pad-tb-4',
		'text-grey-70',
	].join(' ');

	return(
		<li className={classNames} style={props.style}>
			{props.children}
		</li>
	);
}

export class NavListLink extends React.Component {

	render() {
		let isActive  = this.context.router.isActive(this.props.to, true);

		let classNames = [
			'pad-lr-8',
			'pad-tb-4',
			'bg-grey-95-hover',
		];

		// let className = "nav-list-link";
		let style     = this.props.inactiveStyle;

		if (isActive) {
			// className = "nav-list-link-active";
			classNames.push('bg-grey-90');
			style     = this.props.activeStyle;
		}



		return(
			<li className={classNames.join(' ')} style={style}>
				<Link className={'link-unstyled'} to={this.props.to}>{this.props.children}</Link>
			</li>
		);
	}
}
NavListLink.contextTypes = {
	router: React.PropTypes.object.isRequired,
}
