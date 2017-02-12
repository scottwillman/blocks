import React from 'react';


import { Container } from '/imports/components/blocks/basics/Container/Container.jsx';
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
			<Paragraph><Tag flavor="orange">Todo</Tag>Need to add icon support and a possible close button with callback.</Paragraph>

			<Container style={demoContainer}>
				<Tag>Default</Tag>
				<Tag flavor="black">Black</Tag>
				<Tag flavor="grey">Grey</Tag>
				<Tag flavor="orange">Orange</Tag>
				<Tag flavor="red">Red</Tag>
				<Tag flavor="blue">Blue</Tag>
				<Tag flavor="green">Green</Tag>
			</Container>


			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';

					<Container>
						<Tag>Default</Tag>
						<Tag flavor="black">Black</Tag>
						<Tag flavor="grey">Grey</Tag>
						<Tag flavor="orange">Orange</Tag>
						<Tag flavor="red">Red</Tag>
						<Tag flavor="blue">Blue</Tag>
						<Tag flavor="green">Green</Tag>
					</Container>
				`}</CodeBlock>
			</Container>
		</Container>
	);
}
