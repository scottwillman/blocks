import React from 'react';


import { Container } from '/imports/components/blocks/basics/Container/Container.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';

import { Layout, Header, Sidebar, Content, Footer } from '/imports/components/blocks/basics/Layout/Layout.jsx';


export const LayoutDemo = (props) => {

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
			<SectionHeading>Layout</SectionHeading>
			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
			<Paragraph>The <b>Layout</b> set of components include the basic building blocks for a page layout.</Paragraph>

			<Container style={demoContainer}>
				<Header>Header</Header>
				<Layout>
					<Sidebar className="border-1 border-grey-80">Sidebar</Sidebar>
					<Content>Content</Content>
					<Sidebar>Sidebar</Sidebar>
				</Layout>
				<Footer>Footer</Footer>
			</Container>


			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { Layout, Header, Sidebar, Content, Footer } from '/imports/components/blocks/basics/Layout/Layout.jsx';

					<Container>
						<Layout>
							<Header>Header</Header>
							<Sidebar>Sidebar</Sidebar>
							<Content>Content</Content>
							<Sidebar>Sidebar</Sidebar>
							<Footer>Footer</Footer>
						</Layout>
					</Container>
				`}</CodeBlock>
			</Container>
		</Container>
	);
}
