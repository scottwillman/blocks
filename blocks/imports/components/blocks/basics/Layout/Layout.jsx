import React from 'react';


export const Layout = (props) => {

	const classNames = [
		'flex',
		'flex-dir-col',
	].join(' ');

	return(
		<div className={classNames} style={props.style}>
			{props.children}
		</div>
	);
}

export const Header = (props) => {

	const classNames = [
		'bg-grey-90',
	].join(' ');

	return(
		<div className={classNames} style={props.style}>
			{props.children}
		</div>
	);
}

export const Sidebar = (props) => {
	console.log(props);
	// const propsClassNames = props.className.split(' ');
	const classNames = ['flex-width-200'];
	// const classNames = propsClassNames.concat(cmptClassNames).join(' ');

	return(
		<div className={classNames} style={props.style}>
			{props.children}
		</div>
	);
}

export const Content = (props) => {

	const classNames = [
		'flex',
		'flex-dir-row',
		'flex-grow-1',
	].join(' ');

	return(
		<div className={classNames} style={props.style}>
			{props.children}
		</div>
	);
}

export const Footer = (props) => {

	const classNames = [
		'bg-grey-90',
	].join(' ');

	return(
		<div className={classNames} style={props.style}>
			{props.children}
		</div>
	);
}
