import React from 'react';


import { Container } from '/imports/components/blocks/basics/PageLayout/PageLayout.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';


export const VerticalNavigationListDemo = (props) => {

	const headingStyle = {
		"marginTop": "1.5rem",
		"marginBottom": ".8rem",
	}
	const codeBlockStyle = {
		"marginTop": ".5rem",
	}

	return(
		<Container>
			<SectionHeading>Vertical Navigation List</SectionHeading>

			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
			<Paragraph>A <em>VerticalNavigationList</em> component is demonstrated on the left of this page. Works well with the <em>FixedColumnLayout</em> component.</Paragraph>
			<Paragraph><Tag flavor="orange-dark">Note</Tag>The <em>NavListLink</em> sub-component has two style props instead of the typical single style prop: <em>inactiveStyle</em> and <em>activeStyle</em></Paragraph>
			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { VerticalNavigationList, NavListHeading, NavListLink } from '/imports/components/blocks/basics/VerticalNavigationList/VerticalNavigationList.jsx';

					<VerticalNavigationList>
						<NavListHeading>Components</NavListHeading>
						<NavListLink to="/buttons" inactiveStyle={} activeStyle={}>Buttons</NavListLink>
						<NavListLink to="/typography">Typography</NavListLink>
						<NavListLink to="/codeblock">CodeBlock</NavListLink>
						<NavListLink to="/containers">Containers</NavListLink>
						<NavListLink to="/fixedcolumnlayout">FixedColumnLayout</NavListLink>
						<NavListLink to="/verticalnavigationlist">VerticalNavigationList</NavListLink>

						<NavListText>RadioGroup</NavListText>
						<NavListText>SelectList</NavListText>
					</VerticalNavigationList>
				`}</CodeBlock>
			</Container>

		</Container>
	);
}
