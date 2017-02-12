import React from 'react';


import { Container } from '/imports/components/blocks/basics/Container/Container.jsx';
import { SectionHeading, Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { CodeBlock } from '/imports/components/blocks/basics/CodeBlock/CodeBlock.jsx';
import { ToolBar, ToolBarContainer } from '/imports/components/blocks/basics/ToolBar/ToolBar.jsx';
import { Button, ButtonGroup } from '/imports/components/blocks/basics/Buttons/Buttons.jsx';
import { HorizontalNavigationList, NavListLink } from '/imports/components/blocks/basics/NavigationLists/NavigationLists.jsx';
import { Tag } from '/imports/components/blocks/basics/Tags/Tags.jsx';

export const ToolBarDemo = (props) => {

	const headingStyle = {
		"marginTop": "1.5rem",
		"marginBottom": ".8rem",
	}
	const codeBlockStyle = {
		"marginTop": ".5rem",
	}
	const demoContainerStyle = {
		"marginTop": "1rem",
	}
	const rightMarginStyle = {
		"marginRight": "12px",
	}


	return(
		<Container>
			<SectionHeading>Tool Bar</SectionHeading>

			<Heading style={{"marginTop":"1.25rem", "marginBottom":".8rem"}}>Description</Heading>
			<Paragraph>A <em>ToolBar</em> component is designed to live at the top of a container or the body of a webpage. It can be used for navigation
			or any set of links and buttons for page or application. There are two sizes of <em>ToolBar</em>: Large and Small</Paragraph>

			<Container style={demoContainerStyle}>
				<ToolBar style={{'padding': '8px', 'paddingRight':'22px'}}>
					<ToolBarContainer>
						{/* <HorizontalNavigationList>
							<NavListLink to="/buttons">Buttons</NavListLink>
							<NavListLink to="/toolbar">ToolBar</NavListLink>
							<NavListLink to="/horizontalnavigationlist">HorizontalNavigationList</NavListLink>
						</HorizontalNavigationList> */}
						<Button style={rightMarginStyle}>Single</Button>
						<ButtonGroup style={rightMarginStyle}>
							<Button>Left</Button>
							<Button>Right</Button>
						</ButtonGroup>

						<div>Some words go here!</div>
					</ToolBarContainer>

					<ToolBarContainer>

						<ButtonGroup style={rightMarginStyle}>
							<Button>True</Button>
							<Button>False</Button>
						</ButtonGroup>

						<Button flavor="dark" style={rightMarginStyle}>Left Button</Button>

						<div>Login</div>

					</ToolBarContainer>
				</ToolBar>
			</Container>
			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { ToolBar, ToolBarContainer } from '/imports/components/blocks/basics/ToolBar/ToolBar.jsx';

					<ToolBar size="large">
						<ToolBarContainer side="left">
							<HorizontalNavigationList>
								<NavListLink to="/buttons">Buttons</NavListLink>
								<NavListLink to="/toolbar">ToolBar</NavListLink>
								<NavListLink to="/horizontalnavigationlist">HorizontalNavigationList</NavListLink>
							</HorizontalNavigationList>
							<ButtonGroup>
								<Button>Left</Button>
								<Button>Right</Button>
							</ButtonGroup>
							<Button size="small" flavor="default-2">Left Button</Button>
						</ToolBarContainer>
						<ToolBarContainer side="right">
							<ButtonGroup>
								<Button>True</Button>
								<Button flavor="default-2">False</Button>
							</ButtonGroup>
							<ButtonGroup>
								<Button size="small">True</Button>
								<Button size="small">False</Button>
							</ButtonGroup>
						</ToolBarContainer>
					</ToolBar>
				`}</CodeBlock>
			</Container>

			<Container style={demoContainerStyle}>
				<ToolBar style={{'padding': '4px'}}>
					<ToolBarContainer>
						{/* <HorizontalNavigationList>
							<NavListLink to="/buttons">Buttons</NavListLink>
							<NavListLink to="/toolbar">ToolBar</NavListLink>
							<NavListLink to="/horizontalnavigationlist">HorizontalNavigationList</NavListLink>
						</HorizontalNavigationList> */}

						<Button size="small">Left Button</Button>
						<ButtonGroup>
							<Button size="small">Left</Button>
							<Button size="small">Center</Button>
							<Button size="small" flavor="default-2">Right</Button>
						</ButtonGroup>

					</ToolBarContainer>
					<ToolBarContainer>
						<ButtonGroup>
							<Button size="small">Left</Button>
							<Button size="small" flavor="default-2">Center</Button>
							<Button size="small">Right</Button>
						</ButtonGroup>

					</ToolBarContainer>
				</ToolBar>
			</Container>

			<Container>
				<CodeBlock language="jsx" style={codeBlockStyle}>{`
					import { ToolBar, ToolBarContainer } from '/imports/components/blocks/basics/ToolBar/ToolBar.jsx';

					<ToolBar size="small">
						<ToolBarContainer side="left">
							<HorizontalNavigationList>
								<NavListLink to="/buttons">Buttons</NavListLink>
								<NavListLink to="/toolbar">ToolBar</NavListLink>
								<NavListLink to="/horizontalnavigationlist">HorizontalNavigationList</NavListLink>
							</HorizontalNavigationList>
							<Button size="small">Left Button</Button>
							<ButtonGroup>
								<Button size="small">Left</Button>
								<Button size="small">Center</Button>
								<Button size="small" flavor="default-2">Right</Button>
							</ButtonGroup>
						</ToolBarContainer>
						<ToolBarContainer side="right">
							<ButtonGroup>
								<Button size="small">Left</Button>
								<Button size="small" flavor="default-2">Center</Button>
								<Button size="small">Right</Button>
							</ButtonGroup>
						</ToolBarContainer>
					</ToolBar>
				`}</CodeBlock>
			</Container>

		</Container>
	);
}
