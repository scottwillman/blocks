import React from 'react';

import { Caret } from '/imports/components/blocks/basics/Caret/Caret.jsx';

/**
@size: named size sm, md, lg
@isSubmit: boolean
@onClickHandler: function
@color: any valid css color identifier. For ex. rgb(0,0,0), #999999, red, etc.
*/
export class Select extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			'isOpen': false,
			'buttonText': this.props.initialText,
			'selectedValue': '',
		};
	}

	setOpen(e) {
		e.preventDefault();
		const isOpen = this.state.isOpen ? false : true;
		this.setState({'isOpen': isOpen});
	}

	onClickHandler(text, value) {
		this.setState({
			'buttonText': text,
			'selectedValue': value,
			'isOpen': false
		});
	}

	renderOptions() {

		const modalClassNames = [
			'pos-abs',
			'bg-white',
			'border-1',
			'border-grey-90',
			'left-0',
			'right-0',
		].join(' ');

		return(
			<ul className={modalClassNames}>{this.props.children.map((child, idx) =>
				React.cloneElement(child, {
					onClickHandler: this.onClickHandler.bind(this),
					key: idx
				})
			)}</ul>
		);
	}

	render() {

		let containerClassNames = [
			'pos-rel',
		].join(' ');

		let buttonClassNames = [
			'flex',
			'flex-justify-between',
			'flex-align-center',
		];

		switch (this.props.flavor) {
			case 'dark':
				buttonClassNames = buttonClassNames.concat([
					// 'bg-black',
					'text-white',
					// 'border-black',
					'button-flavor-dark',
				]);
				break;
			default:
				buttonClassNames = buttonClassNames.concat([
					'button-flavor-light',
				]);
				break;
		}


		switch (this.props.size) {
			case 'small':
				buttonClassNames = buttonClassNames.concat([
					'font-size-12',
					'pad-lr-8',
					'pad-tb-6',
					'round-3',
				]);
				break;
			case 'large':
				buttonClassNames = buttonClassNames.concat([
					'font-size-18',
					'pad-lr-20',
					'pad-tb-12',
					'round-4',
				]);
				break;
			default: // medium or empty
				buttonClassNames = buttonClassNames.concat([
					'font-size-14',
					'pad-lr-16',
					'pad-tb-8',
					'round-4',
				]);
				break;
		}

		const caretSize = "10px";

		return(
			<div className={containerClassNames} style={this.props.style}>
				<div className={buttonClassNames.join(' ')} onClick={this.setOpen.bind(this)}>
					<div className="select-text">{this.state.buttonText}</div>
					{this.state.isOpen ? <Caret direction="up" size={caretSize} /> : <Caret direction="down" size={caretSize} />}

				</div>
				{this.state.isOpen ?
					this.renderOptions() :
					""
				}
			</div>
		);
	}
}
Select.defaultProps = { 'flavor': 'default-1'};

export class SelectOption extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			'selection': '',
			'isOpen': false,
		};
	}

	onClickHandler(e) {
		e.preventDefault();
		this.props.onClickHandler(this.props.text, this.props.value);
	}

	render() {

		const optionClassNames = [
			'pad-8',
			'cursor-pointer',
		].join(' ');

		return(
			<li className={optionClassNames} style={this.props.style} onClick={this.onClickHandler.bind(this)}>
				{this.props.text}
			</li>
		);
	}

}

export const SelectHeading = (props) => {

	const headingClassNames = [
		'pad-8',
		'font-weight-500',
		'cursor-default',
	].join(' ');

	return(
		<li className={headingClassNames} style={props.style}>
			{props.text}
		</li>
	);
}
