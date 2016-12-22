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
			curState.formErrors[name] = "Tell me I'm awesome.";
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
			"marginTop": "1.5rem",
			"marginLeft": 0,
			"width": "50%",
		}
		const codeBlockStyle = {
			"marginTop": "1.5rem",
		}

		return(
			<Container>
				<SectionHeading>SingleColumnFormLayout</SectionHeading>
				<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
				<Paragraph>Tags can be used for all kinds of stuff. See all available colors in the demo below.</Paragraph>
				<Paragraph><Tag flavor="orange-dark">TO DO</Tag>Need to add icon support and a possible close button with callback.</Paragraph>

				<Container style={demoContainer}>
					<SingleColumnFormLayout>
						<SingleColumnTextInput label="First Input" name="first_input" error="" placeholderText="Placeholder" />
						<SingleColumnTextInput label="Second Input" name="second_input" error="" value="This is something awesome."/>
						<SingleColumnTextInput label="Third Input" name="third_input" error="I feel so empty inside."/>
					</SingleColumnFormLayout>
				</Container>


				<Container>
					<CodeBlock language="jsx" style={codeBlockStyle}>{`
						import { SingleColumnFormLayout, SingleColumnTextInput } from '/imports/components/blocks/forms/Layouts/SingleColumnFormLayout/SingleColumnFormLayout.jsx';

						<Container style={demoContainer}>
							<SingleColumnFormLayout>
								<SingleColumnTextInput label="First Input" name="first_input" error="" placeholderText="Placeholder" />
								<SingleColumnTextInput label="Second Input" name="second_input" error="" value="This is something awesome."/>
								<SingleColumnTextInput label="Third Input" name="third_input" error="I feel so empty inside."/>
							</SingleColumnFormLayout>
						</Container>
					`}</CodeBlock>
				</Container>

				<Container>
					<Heading style={{"marginTop":"2rem", "marginBottom":".8rem"}}>Validation Example</Heading>
					<Paragraph>This shows how to implement basic callback validation.</Paragraph>
				</Container>

				<Container style={demoContainer}>
					<SingleColumnFormLayout>
						<SingleColumnTextInput label="Text Input With Validation" name="text_input" error={this.state.formErrors.text_input} validationCallback={this.textInputValidationCallback.bind(this)} />
					</SingleColumnFormLayout>
				</Container>

				<Container>
					<CodeBlock language="jsx" style={codeBlockStyle}>{`
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
									curState.formErrors[name] = "Tell me I'm awesome.";
								}  else {
									curState.formErrors[name] = '';
								}
								this.setState(curState);
							}

							render() {
								<SingleColumnFormLayout>
									<SingleColumnTextInput
										label="Text Input With Validation"
										name="text_input"
										error={this.state.textInputError}
										validationCallback={this.textInputValidationCallback.bind(this)}
									/>
								</SingleColumnFormLayout>
							}
						}
					`}</CodeBlock>
				</Container>
			</Container>
		);
	}

}
