import React from 'react';



export class BaseTextInput extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			'originalValue': this.props.value,
			'value': this.props.value || "",
		}

		this.__typingTimer;
	}



	onChangeHandler(e) {
		e.preventDefault();
		this.setState({'value': e.target.value});
	}


	/**
	This is called in the render function to see if a callback function has been supplied via props.
	If so, start a validation watcher. Else, ignore.
	*/
	__validationCallbackExists() {
		if (this.props.hasOwnProperty('validationCallback')) {
			if (this.props.validationCallback) {
				return true;
			}
		}
		return false;
	}

	/**
	Called by the `keyUp` event of the input in the render function, this function creates a timer so
	that validation doesn't happen in real-time. It's intended to wait for a user to stop typing before
	validation. Real-time validation can be annoying when you haven't finished typing.
	*/
	__validationWatcher(e) {
		e.preventDefault();

		//-- If there is a current error, run validationCallback instantly on keyup
		//-- Else if there is no error, set a timer to run validationCallback (this.props.doneTypingInterval)

		clearTimeout(this.__typingTimer);
		if (this.props.errorMessage) {
			this.validationCallback();
		} else {
			this.__typingTimer = setTimeout(this.validationCallback.bind(this), this.props.doneTypingInterval);
		}
	}

	/**
	This is a function passed by the parent form to do validation on this entered data.
	It has been pushed up to the form so the form layout can handle placement of errors and feedback.
	NOTE: The value is accessed by this.refs.input.value instead of this.state.value because it is
	not garaunteed that state will have finished updating yet.
	*/
	validationCallback() {
		this.props.validationCallback(this.props.name, this.refs.input.value);
	}



	/**
	This is called by the parent form via `this.refs.[componentRef].getValue()`.
	getValue() is usually called during the onSubmit handler of the parent form and
	in case the user hits the ENTER key before this input's timer expires and validations begin,
	we kill the timer so we don't double-up on the validation that onSubmit will also do.
	*/
	getValue() {
		clearTimeout(this.__typingTimer);
		return this.state.value;
	}

	/**
	This is called by the parent form via `this.refs.[componentRef].hasChanged()`.
	It is to help determine if data from this input should be submitted or not. That is,
	if a value is pre-populated in an input from the DB and it hasn't changed, it shouldn't be
	re-posted to the DB.
	*/
	hasValueChanged() {
		return (this.state.value === this.state.originalValue) ? false : true;
	}


	/**
	Might be cool to add an onBlur event here too.
	*/
	render() {
		return(
			<div>
				<div>{this.props.errorMessage}</div>
				<input
					className={this.props.className}
					ref="input"
					type="text"
					name={this.props.name}
					value={this.state.value}
					onChange={this.onChangeHandler.bind(this)}
					autoComplete='off'
					onKeyUp={this.__validationCallbackExists() ? this.__validationWatcher.bind(this) : null}
					placeholder={this.props.placeholderText}
				/>
			</div>
		);
	}
}
BaseTextInput.propTypes = {
	name: React.PropTypes.string.isRequired,
	value: React.PropTypes.string,
	validationCallback: React.PropTypes.func,
	errorMessage: React.PropTypes.string,
	doneTypingInterval: React.PropTypes.number,
	placeholderText: React.PropTypes.string,
}
BaseTextInput.defaultProps = {
	doneTypingInterval: 1000,
}
