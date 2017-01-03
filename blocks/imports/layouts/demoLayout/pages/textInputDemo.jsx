import React from 'react';


import { Container } from '/imports/components/blocks/basics/Containers/Containers.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';

import { TextInput } from '/imports/components/blocks/forms/TextInput/TextInput.jsx';


export class TextInputDemo extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			'formErrors': {
				'text_input': '',
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

	render() {
		const headingStyle = {
			"marginTop": "1.5rem",
			"marginBottom": ".8rem",
		}
		const demoContainer = {
			"marginTop": ".5rem",
			"marginLeft": 0,
			"width": "50%",
		}
		const codeBlockStyle = {
			"marginTop": "1.5rem",
		}

		return(
			<Container>
				<SectionHeading>TextInput</SectionHeading>
				<Paragraph>Standard text input with hooks for validation and feedback.</Paragraph>
				<Paragraph><Tag flavor="orange-dark">TODO</Tag> Add multi-line (textarea) functionality</Paragraph>

				<Container style={demoContainer}>
					<TextInput label="First Input" helpText="Empty with placeholder value" name="first_input" placeholderText="Placeholder" />
					<TextInput label="Second Input" helpText="With default value" name="second_input" value="This is something awesome." />
					<TextInput label="Third Input" helpText="Error State" name="third_input" errorMessage="I feel so empty inside." />
					<TextInput label="Third Input" helpText="Successful state" name="third_input"successMessage="Nom nom nom" value="Cookies!!!" />
				</Container>


				<Container>
					<CodeBlock language="jsx" style={codeBlockStyle}>{`
						import { TextInput } from '/imports/components/blocks/forms/Layouts/TextInput/TextInput.jsx';

						<Container style={demoContainer}>
							<TextInput label="First Input" helpText="Empty with placeholder value" name="first_input" placeholderText="Placeholder" />
							<TextInput label="Second Input" helpText="With default value" name="second_input" value="This is something awesome." />
							<TextInput label="Third Input" helpText="Error State" name="third_input" errorMessage="I feel so empty inside." />
							<TextInput label="Third Input" helpText="Successful state" name="third_input"successMessage="Nom nom nom" value="Cookies!!!" />
						</Container>
					`}</CodeBlock>
				</Container>

				<Heading style={{"marginTop":"2rem"}}>API</Heading>
				<Paragraph><b>getValue()</b></Paragraph>
				<Paragraph><b>hasValueChanged()</b></Paragraph>
				<Paragraph><b>validationCallback</b> <em>(callback func)</em></Paragraph>
				<Paragraph><b>doneTypingInterval</b> <em>(time in ms)</em></Paragraph>

			</Container>
		);
	}

}
