import React from 'react';


// import { Container } from '/imports/components/blocks/basics/Container/Container.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';

import { Container, Header, Footer } from '/imports/components/blocks/basics/PageLayout/PageLayout.jsx';
import { SidebarLayout, Sidebar, Content } from '/imports/components/blocks/basics/SidebarLayout/SidebarLayout.jsx';


export const SidebarLayoutDemo = (props) => {
	const sectionHeadingStyle = {
		"marginBottom": ".8rem",
	}
	const headingStyle = {
		"marginTop": "1.5rem",
		"marginBottom": ".8rem",
	}
	const codeBlockStyle = {
		"marginTop": "1rem",
	}

	const sidebarLayoutStyle = {
		"marginTop": "1rem",
		"border": "1px solid hsl(0, 0%, 90%)",
	}
	const leftSidebarStyle = {
		"borderRight": "1px solid hsl(0, 0%, 90%)",
		"padding": "8px",
	}
	const rightSidebarStyle = {
		"borderLeft": "1px solid hsl(0, 0%, 90%)",
		"padding": "8px",
	}
	const contentStyle = {
		"padding": "8px",
	}

	return(
		<Container>
			<SectionHeading style={sectionHeadingStyle}>SidebarLayout</SectionHeading>
			<Paragraph>The <b>SidebarLayout</b> set of components include the basic building blocks for a column-based page layout.</Paragraph>

			<Paragraph>A <b>SidebarLayout</b> is a flex container designed to be the parent of the <em>Content</em> and <em>Sidebar</em> components and has no properties. A demo is shown below in the child components demo.</Paragraph>

			<Heading style={headingStyle}>Sidebar and Content</Heading>
			<Paragraph>These two child components (of the SidebarLayout component) are simple flex-based layout containers used to setup typical column-based layouts. Both components accept a <em>verticalAlign</em> prop that gets passed directly to a flex <em>align-items</em> css rule. The <b>Sidebar</b> component also accepts an optional <em>width</em> prop. Sidebar placement (on the right or left) is determined by the order in which you use them in the dom. Some examples are below.</Paragraph>

			<Heading style={headingStyle}>Example</Heading>
			<SidebarLayout style={sidebarLayoutStyle}>
				<Sidebar width="250px" style={leftSidebarStyle}>Left Sidebar</Sidebar>
				<Content style={contentStyle}>Demo Content</Content>
				<Sidebar width="150px" style={rightSidebarStyle}>Right Sidebar</Sidebar>
			</SidebarLayout>



				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { SidebarLayout, Sidebar, Content } from '/imports/components/blocks/basics/SidebarLayout/SidebarLayout.jsx';

					<SidebarLayout style={demoContainer}>
						<Sidebar width="250" style={leftSidebarStyle}>Left Sidebar</Sidebar>
						<Content>Demo Content</Content>
						<Sidebar width="150" style={rightSidebarStyle}>Right Sidebar</Sidebar>
					</SidebarLayout>
				`}</CodeBlock>

		</Container>
	);
}
