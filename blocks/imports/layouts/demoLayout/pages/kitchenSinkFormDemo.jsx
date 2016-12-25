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
				'text_input_1': '',
			}
		}
	}

	textInputValidationCallback(name, value) {
		let curState = this.state;
		if (value.indexOf('awesome') === -1) {
			curState.formErrors[name] = "Tell me I'm awesome and I'll go away.";
		}  else {
			curState.formErrors[name] = '';
		}
		this.setState(curState);
	}

	formSubmit(e) {
		e.preventDefault();

		console.log(this.state);
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
				<Paragraph>Manually add each input's name into the state list of <em>formInputs</em></Paragraph>

				<Container style={demoContainer}>
					<SingleColumnFormLayout>
						<SingleColumnTextInput
							label="Text Input With Validation"
							name="text_input_1"
							errorMessage={this.state.formInputs.text_input_1.errorMessage}
							successMessage={this.state.formInputs.text_input_1.successMessage}
							validationCallback={this.textInputValidationCallback.bind(this)}
						/>
						<SingleColumnTextInput
							label="Text Input With Validation"
							name="text_input_2"
							errorMessage={this.state.formInputs.text_input_2.errorMessage}
							successMessage={this.state.formInputs.text_input_2.successMessage}
							validationCallback={this.textInputValidationCallback.bind(this)}
						/>
						<Button isSubmit={true} onClickHandler={this.formSubmit.bind(this)}>Submit Form</Button>
					</SingleColumnFormLayout>
				</Container>

				<Container>
					<CodeBlock language="jsx" style={codeBlockStyle}>{`blank`}</CodeBlock>
				</Container>
			</Container>
		);
	}

}
