import React from 'react';


import { Container } from '/imports/components/blocks/basics/Containers/Containers.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';


export const CodeBlockDemo = (props) => {

	const headingStyle = {
		"marginTop": "1.5rem",
		"marginBottom": ".8rem",
	}
	const codeBlockStyle = {
		"marginTop": ".5rem",
	}

	return(
		<Container>
			<SectionHeading>Code Block</SectionHeading>
			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
			<Paragraph>A Code Block is for displaying code samples on a page (like the examples on this page). Syntax highlighting is determined by
			the "language" property. Language options are listed below. Syntax highlighting is supplied by <a href="http://www.prismjs.com" target="blank">Prism</a>.</Paragraph>
			<Paragraph><Tag flavor="grey-dark">Languages</Tag>jsx, html, css, sass, json, python</Paragraph>
			<Paragraph><Tag flavor="orange-dark">Note</Tag>Code is left-trimmed based on the indentation
			of the first line. Blank lines are removed from the head and tail of the code.</Paragraph>

			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';

					<CodeBlock language="jsx">{\`
						<div>
							<span>Highlight me!</span>
						</div>
					\`}</CodeBlock>
				`}</CodeBlock>
			</Container>
		</Container>
	);
}
