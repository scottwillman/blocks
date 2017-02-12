import React from 'react';

import { BaseTextInput } from '../BaseElements/BaseTextInput.jsx';



export class TextInput extends React.Component {

	hasValueChanged() {
		return this.refs.input.hasValueChanged();
	}

	getValue() {
		return this.refs.input.getValue();
	}

	render() {

		const labelClassNames = [
			"disp-inline-block",
			"margin-t-16",
		].join(' ');

		const helpClassNames = [
			"text-grey-60",
			"font-size-12",
			"margin-l-12",
		].join(' ');

		let inputClassNames = [
			"bg-grey-98",
			"text-grey-40",
			"border-1",
			"pad-8",
			"margin-t-4",
			"width-full",
			"round-4",
		];

		if (this.props.errorMessage) {
			inputClassNames.push("input-text-error");
		} else if (this.props.successMessage) {
			inputClassNames.push("input-text-success");
		} else {
			inputClassNames.push("input-text");
		}


		return (
			<div style={this.props.style}>
				<label htmlFor={this.props.name} className={labelClassNames}>{this.props.label}</label>
				<span className={helpClassNames}>{this.props.helpText}</span>
				<BaseTextInput
					ref="input"
					className={inputClassNames.join(' ')}
					name={this.props.name}
					value={this.props.value}
					validationCallback={this.props.validationCallback}
					doneTypingInterval={this.props.doneTypingInterval}
					placeholderText={this.props.placeholderText}
				/>
				{this.props.errorMessage ?
					<div className="margin-t-4 input-message-text-error">{this.props.errorMessage}</div> :
					<div className="margin-t-4 input-message-text-success">{this.props.successMessage}</div>
				}
			</div>
		);
	}
}
