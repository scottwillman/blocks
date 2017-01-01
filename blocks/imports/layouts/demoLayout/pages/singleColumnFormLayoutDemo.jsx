import React from 'react';


import { Container } from '/imports/components/blocks/basics/Containers/Containers.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';

import { SingleColumnFormLayout, SingleColumnTextInput } from '/imports/components/blocks/forms/Layouts/SingleColumnFormLayout/SingleColumnFormLayout.jsx';


export class SingleColumnFormLayoutDemo extends React.Component {

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
				<SectionHeading>SingleColumnFormLayout</SectionHeading>
				<Paragraph>The <em>SingleColumnFormLayout</em> is a standard best-practice vertically stacked form layout. All subsequent inputs can be children of this layout.</Paragraph>
				<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>SingleColumnTextInput</Heading>
				<Paragraph>Standard text input with hooks for validation and feedback.</Paragraph>
				<Paragraph><Tag flavor="red-dark">TODO</Tag> Remove <em>SingleColumn</em> naming reference from <em>TextInput</em>. There only needs to be one text input layout arrangement. Any arrangement that needs to be different will be purpose-built and have a purposeful name.</Paragraph>
				<Paragraph><Tag flavor="red-dark">TODO</Tag> Rename <em>TextInput</em> component to <em>BaseTextInput</em>.</Paragraph>
				<Paragraph><Tag flavor="red-dark">TODO</Tag> Add multi-line (textarea) functionality to <em>TextInput</em> component.</Paragraph>
				<Paragraph><Tag flavor="red-dark">TODO</Tag> Design a new form layout component (if necessary).</Paragraph>

				<Container style={demoContainer}>
					<SingleColumnFormLayout>
						<SingleColumnTextInput label="First Input" helpText="Empty with placeholder value" name="first_input" placeholderText="Placeholder" />
						<SingleColumnTextInput label="Second Input" helpText="With default value" name="second_input" value="This is something awesome." />
						<SingleColumnTextInput label="Third Input" helpText="Error State" name="third_input" errorMessage="I feel so empty inside." />
						<SingleColumnTextInput label="Third Input" helpText="Successful state" name="third_input"successMessage="Nom nom nom" value="Cookies!!!" />
					</SingleColumnFormLayout>
				</Container>


				<Container>
					<CodeBlock language="jsx" style={codeBlockStyle}>{`
						import { SingleColumnFormLayout, SingleColumnTextInput } from '/imports/components/blocks/forms/Layouts/SingleColumnFormLayout/SingleColumnFormLayout.jsx';

						<Container style={demoContainer}>
							<Form>
								<TextInput label="First Input" helpText="Empty with placeholder value" name="first_input" placeholderText="Placeholder" />
								<TextInput label="Second Input" helpText="With default value" name="second_input" value="This is something awesome." />
								<TextInput label="Third Input" helpText="Error State" name="third_input" errorMessage="I feel so empty inside." />
								<TextInput label="Third Input" helpText="Successful state" name="third_input"successMessage="Nom nom nom" value="Cookies!!!" />
								<FileUpload label="Upload This" />
							</Form>
						</Container>
					`}</CodeBlock>
				</Container>

			</Container>
		);
	}

}
