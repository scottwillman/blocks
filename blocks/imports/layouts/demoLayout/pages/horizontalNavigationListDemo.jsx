import React from 'react';


import { Container } from '/imports/components/blocks/basics/PageLayout/PageLayout.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { HorizontalNavigationList, NavListHeading, NavListLink } from '/imports/components/blocks/basics/NavigationLists/NavigationLists.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';


export const HorizontalNavigationListDemo = (props) => {

	const headingStyle = {
		"marginTop": "1.5rem",
		"marginBottom": ".8rem",
	}
	const demoContainerStyle = {
		"margin": "2rem 0",
	}
	const codeBlockStyle = {
		"marginTop": ".5rem",
	}

	return(
		<Container>
			<SectionHeading>Horizontal Navigation List</SectionHeading>

			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
			<Paragraph>A <em>HorizontalNavigationList</em> component is demonstrated on the left of this page. Works well with the <em>FixedColumnLayout</em> component.</Paragraph>
			<Paragraph><Tag flavor="orange-dark">Note</Tag>The <em>NavListLink</em> sub-component has two style props instead of the typical single style prop: <em>inactiveStyle</em> and <em>activeStyle</em></Paragraph>

			<Container style={demoContainerStyle}>
				<HorizontalNavigationList>
					<NavListHeading>Components</NavListHeading>
					<NavListLink to="/buttons">Buttons</NavListLink>
					<NavListLink to="/typography">Typography</NavListLink>
					<NavListLink to="/horizontalnavigationlist">HorizontalNavigationList</NavListLink>
					<NavListLink to="/codeblock">CodeBlock</NavListLink>
					<NavListLink to="/containers">Containers</NavListLink>
				</HorizontalNavigationList>
			</Container>

			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { HorizontalNavigationList, NavListHeading, NavListLink } from '/imports/components/blocks/basics/NavigationLists/NavigationLists.jsx';

					<HorizontalNavigationList>
						<NavListHeading>Components</NavListHeading>
						<NavListLink to="/buttons" inactiveStyle={} activeStyle={}>Buttons</NavListLink>
						<NavListLink to="/typography">Typography</NavListLink>
						<NavListLink to="/codeblock">CodeBlock</NavListLink>
						<NavListLink to="/containers">Containers</NavListLink>
						<NavListLink to="/fixedcolumnlayout">FixedColumnLayout</NavListLink>
						<NavListLink to="/verticalnavigationlist">HorizontalNavigationList</NavListLink>
					</HorizontalNavigationList>
				`}</CodeBlock>
			</Container>

		</Container>
	);
}
