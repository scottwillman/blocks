import React from 'react';


import { Container } from '/imports/components/blocks/basics/PageLayout/PageLayout.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';
import { Select, SelectOption, SelectHeading } from '/imports/components/blocks/forms/Select/Select.jsx';

export const SelectDemo = (props) => {

	const headingStyle = {
		"marginTop": "1.5rem",
		"marginBottom": ".8rem",
	}
	const demoContainer = {
		"marginTop": "1rem",
	}
	const codeBlockStyle = {
		"marginTop": "1rem",
	}

	return(
		<Container>
			<SectionHeading>Select</SectionHeading>
			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
			<Paragraph>A <em>Select</em> component is generally good for providing a list options greater than four. Any less than that and it would be better presented as radio buttons.</Paragraph>
			<Paragraph><Tag flavor="grey-dark">TODO</Tag> Add label and messaging.</Paragraph>

			<Container style={demoContainer}>
				<Select style={{"width":"200px"}} initialText="Choose an option..." flavor="default-1">
					<SelectHeading text="Group 1" />
					<SelectOption text="Item A" value="a" />
					<SelectOption text="Item B" value="b" />
					<SelectHeading text="Group 2" />
					<SelectOption text="Item C" value="c" />
				</Select>
			</Container>

			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					<Select style={{"width":"300px"}} initialText="Choose an option..." flavor="default-1">
						<SelectHeading text="Group 1" />
						<SelectOption text="Item A" value="a" />
						<SelectOption text="Item B" value="b" />
						<SelectHeading text="Group 2" />
						<SelectOption text="Item C" value="c" />
					</Select>
				`}</CodeBlock>
			</Container>
		</Container>
	);
}
