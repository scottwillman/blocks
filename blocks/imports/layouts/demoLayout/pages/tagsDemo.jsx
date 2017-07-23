import React from 'react';


import { Container } from '/imports/components/blocks/basics/PageLayout/PageLayout.jsx';
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

			<SectionHeading>Tags <Tag color="blue">Themeable</Tag></SectionHeading>
			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
			<Paragraph>Tags can be used for all kinds of stuff. Available colors are anything you specify in your theme's <em>colors</em> object.</Paragraph>
			<Paragraph><Tag color="orange">TODO</Tag>Need to add icon support and a possible close button with callback.</Paragraph>

			<Container style={demoContainer}>
				<Tag>Default</Tag>
				<Tag color="black">Black</Tag>
				<Tag color="grey">Grey</Tag>
				<Tag color="orange">Orange</Tag>
				<Tag color="red">Red</Tag>
				<Tag color="blue">Blue</Tag>
				<Tag color="green">Green</Tag>
			</Container>


			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';

					<Container>
						<Tag>Default</Tag>
						<Tag color="black">Black</Tag>
						<Tag color="grey">Grey</Tag>
						<Tag color="orange">Orange</Tag>
						<Tag color="red">Red</Tag>
						<Tag color="blue">Blue</Tag>
						<Tag color="green">Green</Tag>
					</Container>
				`}</CodeBlock>
			</Container>
		</Container>
	);
}
