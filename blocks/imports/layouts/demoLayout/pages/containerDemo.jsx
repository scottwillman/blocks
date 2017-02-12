import React from 'react';


import { Container } from '/imports/components/blocks/basics/Container/Container.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';



export const ContainersDemo = (props) => {

	const headingStyle = {
		"marginTop": "1.5rem",
		"marginBottom": ".8rem",
	}
	const codeBlockStyle = {
		"marginTop": ".5rem",
	}

	return(
		<Container>
			<SectionHeading>Containers</SectionHeading>

			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>PageContainer</Heading>
			<Paragraph>A <em>PageContainer</em> component is to be used as a base layout element. It will set the content within it to be full width or centered and tailored to the necessary breakpoints.</Paragraph>
			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { PageContainer } from '/imports/components/blocks/basics/Container/Container.jsx';

					<PageContainer fullWidth={true}>
						...
					</PageContainer>
				`}</CodeBlock>
			</Container>

			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Container</Heading>
			<Paragraph>A <em>Container</em> component is to be used as a secondary layout element. At this point, it's basically a 100% width and centered div.</Paragraph>
			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { PageContainer, Container } from '/imports/components/blocks/basics/Container/Container.jsx';

					<PageContainer fullWidth={true}>
						<Container>Put stuff here</Container>
					</PageContainer>
				`}</CodeBlock>
			</Container>
		</Container>
	);
}
