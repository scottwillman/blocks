import React from 'react';


import { Container } from '/imports/components/blocks/basics/Containers/Containers.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';
import { Button } from '/imports/components/blocks/basics/Buttons/Buttons.jsx';

import { SingleColumnFormLayout, SingleColumnTextInput } from '/imports/components/blocks/forms/Layouts/SingleColumnFormLayout/SingleColumnFormLayout.jsx';


export class KitchenSinkFormDemo extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			'formInputs': {
				'first_name': {
					'errorMessage':'',
					'successMessage':'',
				},
				'last_name': {
					'errorMessage':'',
					'successMessage':'',
				},
			}
		}
	}

	textInputValidationCallback(name, value) {
		// Get the current component state
		let curState = this.state;

		// Example Validation
		if (value.toLowerCase().indexOf('awesome') === -1) {
			curState.formInputs[name].errorMessage = "Tell me I'm awesome and I'll go away.";
			curState.formInputs[name].successMessage = "";
		}  else {
			curState.formInputs[name].errorMessage = '';
			curState.formInputs[name].successMessage = "Thanks for noticing!";
		}

		// Update the component state
		this.setState(curState);
	}

	/**
	This loops through all of the inputs listed in this.refs. It then calls hasValueChanged()
	and getValue() on each input. If any inputs generate an error during validation it returns
	false.
	REQUIRES: A list of validations for each input, usually placed in the constructor of the
	implementing form component. Like so:
		this.validations = {
			'name':  ['required'],
			'email': ['required', 'email'],
		};
	*/
	gatherAndValidateData() {
		const results = {};

		// Iterate through all child input components and check/get their values
		for (let r in this.refs) {
			if (this.refs[r].hasValueChanged()) {
				let value = this.refs[r].getValue();

				let error = validate(value, this.validations[r]);
				this.updateErrorState(r, error);
				if (error) return false; // Do not submit
				results[r] = value;
			}
		}
		return results;
	} 

	formSubmit(e) {
		e.preventDefault();

		// Force validation on all inputs just in case something was missed
		const text_inputs = ['first_name','last_name'];
		for (i in text_inputs) {
			this.textInputValidationCallback(text_inputs[i], this.refs[text_inputs[i]].getValue());
		}

		// Check for outstanding error messages before getting values for submission
		for (i in text_inputs) {
			if (this.state.formInputs[text_inputs[i]].errorMessage) {
				console.log(text_inputs[i] + " has an error");
			}
		}
	}

	render() {
		const headingStyle = {
			"marginTop": "1.5rem",
			"marginBottom": ".8rem",
		}
		const demoContainer = {
			"marginTop": "1.5rem",
			"marginLeft": 0,
			"width": "50%",
		}
		const codeBlockStyle = {
			"marginTop": "1.5rem",
		}

		return(
			<Container>
				<SectionHeading>Single Column Forms Demo</SectionHeading>
				<Heading style={{"marginTop":"2rem", "marginBottom":".8rem"}}>Validation Example</Heading>
				<Paragraph>Manually add each input's name into the state list of <em>formInputs</em>.</Paragraph>
				<Paragraph><Tag>TODO</Tag> Add submit functionality.</Paragraph>

				<Container style={demoContainer}>
					<SingleColumnFormLayout>
						<SingleColumnTextInput
							label="First Name"
							ref="first_name"
							name="first_name"
							helpText="Has a success message"
							errorMessage={this.state.formInputs.first_name.errorMessage}
							successMessage={this.state.formInputs.first_name.successMessage}
							validationCallback={this.textInputValidationCallback.bind(this)}
						/>
						<SingleColumnTextInput
							label="Last Name"
							ref="last_name"
							name="last_name"
							helpText="Without a success message"
							errorMessage={this.state.formInputs.last_name.errorMessage}
							validationCallback={this.textInputValidationCallback.bind(this)}
						/>
					<Button isSubmit={true} onClickHandler={this.formSubmit.bind(this)} style={{"marginTop":"1rem"}}>Submit Form</Button>
					</SingleColumnFormLayout>
				</Container>

				<Container>
					<CodeBlock language="jsx" style={codeBlockStyle}>{`blank`}</CodeBlock>
				</Container>
			</Container>
		);
	}

}
