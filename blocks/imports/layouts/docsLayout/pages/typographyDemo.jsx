import React from 'react';


import { Container } from '/imports/components/blocks/basics/PageLayout/PageLayout.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';



export const TypographyDemo = (props) => {

	const headingStyle = {
		"marginTop": "1.5rem",
		"marginBottom": ".8rem",
	}
	const codeBlockStyle = {
		"margin": "1rem 0 2rem",
	}

	return(
		<Container>
			<SectionHeading>Typography</SectionHeading>
			<Heading style={headingStyle}>Description</Heading>
			<Paragraph>Besides the below components, the typography component also includes styles for basic text elements like <em>p, b, em, li, span,</em> and <em>div.</em></Paragraph>
			<CodeBlock language="jsx" style={codeBlockStyle}>{`
				import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';

				<SectionHeading>Section Heading</SectionHeading>
				<Heading>Description</Heading>
				<Paragraph><b>Some text goes here</b></Paragraph>
				<Paragraph>lorem ipsum...</Paragraph>
			`}</CodeBlock>
			<SectionHeading>Section Heading</SectionHeading>
			<Heading style={headingStyle}>Description</Heading>
			<Paragraph><b>Some text goes here</b></Paragraph>
			<Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
		</Container>
	);
}
