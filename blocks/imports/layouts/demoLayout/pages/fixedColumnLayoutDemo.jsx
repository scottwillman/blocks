import React from 'react';


import { Container } from '/imports/components/blocks/basics/Containers/Containers.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { FixedColumnLayout, FixedColumn, ElasticContent } from '/imports/components/blocks/basics/FixedColumnLayout/FixedColumnLayout.jsx';


export const FixedColumnLayoutDemo = (props) => {

	const headingStyle = {
		"marginTop": "1.5rem",
		"marginBottom": ".8rem",
	}
	const demoContainerStyle = {
		"marginTop": "1rem",
	}
	const codeBlockStyle = {
		"marginTop": "1.5rem",
	}

	return(
		<Container>
			<SectionHeading>Fixed Column Layout</SectionHeading>

			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>To Do</Heading>
			<Paragraph>This component needs more work. The fixed 200px width needs to be flexible and needs to be specified at the top level. The <em>ElasticContent</em> component needs to know about it to set it's margin to accomodate. It also needs to accomodate right-side columns.</Paragraph>
			<Container style={demoContainerStyle}>
				<FixedColumnLayout>
					<FixedColumn side="left" style={{'backgroundColor':'rgb(230,240,250)'}}>Navigation</FixedColumn>
					<ElasticContent style={{'backgroundColor':'rgb(250,240,230)'}}>Content</ElasticContent>
				</FixedColumnLayout>
			</Container>
			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { FixedColumnLayout, FixedColumn, ElasticContent } from '/imports/components/blocks/basics/FixedColumnLayout/FixedColumnLayout.jsx';

					<FixedColumnLayout>
						<FixedColumn side="left" style={{"padding: 6px"}}>Navigation</FixedColumn>
						<ElasticContent style={{"padding: 6px"}}>Content</ElasticContent>
					</FixedColumnLayout>
				`}</CodeBlock>
			</Container>

		</Container>
	);
}
