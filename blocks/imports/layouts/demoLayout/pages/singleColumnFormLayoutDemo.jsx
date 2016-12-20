import React from 'react';


import { Container } from '/imports/components/blocks/basics/Containers/Containers.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';

import { SingleColumnFormLayout, SingleColumnTextInput } from '/imports/components/blocks/forms/Layouts/SingleColumnFormLayout/SingleColumnFormLayout.jsx';


export const SingleColumnFormLayoutDemo = (props) => {

	const headingStyle = {
		"marginTop": "1.5rem",
		"marginBottom": ".8rem",
	}
	const demoContainer = {
		"marginTop": "1.5rem",
		"marginLeft": 0;
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
					<SingleColumnTextInput label="First Input" name="first_input" error="" placeholderText="placeholder"/>
					<SingleColumnTextInput label="Second Input" name="second_input" error="Nope, not quite."/>
					<SingleColumnTextInput label="Third Input" name="third_input" error="Close, but no cigar."/>
				</SingleColumnFormLayout>
			</Container>


			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { SingleColumnFormLayout, SingleColumnTextInput } from '/imports/components/blocks/forms/Layouts/SingleColumnFormLayout/SingleColumnFormLayout.jsx';

					<SingleColumnFormLayout>
						<SingleColumnTextInput label="First Input" name="first_input" error="" />
						<SingleColumnTextInput label="Second Input" name="second_input" error="Nope, not quite."/>
						<SingleColumnTextInput label="Third Input" name="third_input" error="Close, but no cigar."/>
					</SingleColumnFormLayout>
				`}</CodeBlock>
			</Container>
		</Container>
	);
}
