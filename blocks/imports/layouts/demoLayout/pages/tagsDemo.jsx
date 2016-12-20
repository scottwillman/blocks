import React from 'react';


import { Container } from '/imports/components/blocks/basics/Containers/Containers.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';


export const TagsDemo = (props) => {

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
			<SectionHeading>Tags</SectionHeading>
			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
			<Paragraph>Tags can be used for all kinds of stuff. See all available colors in the demo below.</Paragraph>
			<Paragraph><Tag flavor="orange-dark">TO DO</Tag>Need to add icon support and a possible close button with callback.</Paragraph>

			<Container style={demoContainer}>
				<Tag flavor="grey-light">Grey Light</Tag>
				<Tag flavor="orange-light">Orange Light</Tag>
				<Tag flavor="red-light">Red Light</Tag>
				<Tag flavor="blue-light">Blue Light</Tag>
				<Tag flavor="green-light">Green Light</Tag>
			</Container>

			<Container style={demoContainer}>
				<Tag>Default</Tag>
				<Tag flavor="black">Black</Tag>
				<Tag flavor="grey-dark">Grey Dark</Tag>
				<Tag flavor="orange-dark">Orange Dark</Tag>
				<Tag flavor="red-dark">Red Dark</Tag>
				<Tag flavor="blue-dark">Blue Dark</Tag>
				<Tag flavor="green-dark">Green Dark</Tag>
			</Container>

			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';

					<Container>
						<Tag flavor="grey-light">Grey Light</Tag>
						<Tag flavor="orange-light">Orange Light</Tag>
						<Tag flavor="red-light">Red Light</Tag>
						<Tag flavor="blue-light">Blue Light</Tag>
						<Tag flavor="green-light">Green Light</Tag>
					</Container>

					<Container>
						<Tag>Default</Tag>
						<Tag flavor="black">Black</Tag>
						<Tag flavor="grey-dark">Grey Dark</Tag>
						<Tag flavor="orange-dark">Orange Dark</Tag>
						<Tag flavor="red-dark">Red Dark</Tag>
						<Tag flavor="blue-dark">Blue Dark</Tag>
						<Tag flavor="green-dark">Green Dark</Tag>
					</Container>
				`}</CodeBlock>
			</Container>
		</Container>
	);
}
