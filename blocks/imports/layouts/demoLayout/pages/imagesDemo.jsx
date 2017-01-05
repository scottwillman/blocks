import React from 'react';


import { Container } from '/imports/components/blocks/basics/Containers/Containers.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';
import { Image } from '/imports/components/blocks/basics/Images/Images.jsx';


export const ImagesDemo = (props) => {

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
			<SectionHeading>Images</SectionHeading>
			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
			<Paragraph>Tags can be used for all kinds of stuff. See all available colors in the demo below.</Paragraph>
			<Paragraph><Tag flavor="orange-dark">TO DO</Tag>Need to add icon support and a possible close button with callback.</Paragraph>

			<Container style={demoContainer}>
				<Image src="/images/test.jpg" />
			</Container>

			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { Image } from '/imports/components/blocks/basics/Images/Images.jsx';

					<Container>
						<Image src="/images/test.jpg" />
					</Container>
				`}</CodeBlock>
			</Container>
		</Container>
	);
}
