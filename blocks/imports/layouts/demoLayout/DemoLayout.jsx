import React from 'react';


import { Container, Header, Footer } from '/imports/components/blocks/basics/PageLayout/PageLayout.jsx';
import { SidebarLayout, Sidebar, Content } from '/imports/components/blocks/basics/SidebarLayout/SidebarLayout.jsx';
import { HorizontalNavigationList, VerticalNavigationList, NavListHeading, NavListLink, NavListText} from '/imports/components/blocks/basics/NavigationLists/NavigationLists.jsx';

import { theme } from '/imports/components/blocks/base/themes.js';


export const DemoLayout = (props) => {

	const headerStyle = {
		"padding": "10px 8px 8px",
		"backgroundColor": "#333",
		"color": "#FFFFFF",
	};
	const footerStyle = {
		"padding": "1rem",
		"backgroundColor": theme.colors.grey.lightest,
		"minHeight": "100px",
	}
	const headingSecondaryStyle = {
		"marginTop": "1rem",
	};
	const leftSidebarStyle = {
		"borderRight": "1px solid hsl(0,0%,90%)",
		"paddingTop": "16px",
	};
	const pageContentStyle = {
		"padding": "24px",
	}

	return (
		<Container width="100%">
			<Header style={headerStyle}>Blocks React Component Framework</Header>
			<SidebarLayout>

				<Sidebar style={leftSidebarStyle}>

					<VerticalNavigationList>
						<NavListHeading>Basic Components</NavListHeading>
						<NavListLink to="/sidebarLayout">SidebarLayout</NavListLink>
						<NavListLink to="/buttons">Buttons</NavListLink>
						<NavListLink to="/typography">Typography</NavListLink>
						<NavListLink to="/codeblock">CodeBlock</NavListLink>
						<NavListLink to="/table">Table</NavListLink>
						<NavListLink to="/toolbar">ToolBar</NavListLink>
						<NavListLink to="/tags">Tags</NavListLink>
						<NavListLink to="/cards">Cards</NavListLink>
						<NavListLink to="/images">Images</NavListLink>

						<NavListText>Data List</NavListText>
						<NavListText>Grid</NavListText>
						<NavListText>Icons</NavListText>
						<NavListText>Modal</NavListText>
						<NavListText>Dropdown</NavListText>
						<NavListText>Message</NavListText>

						<NavListHeading style={headingSecondaryStyle}>Forms</NavListHeading>

						<NavListLink to="/textinput">TextInput</NavListLink>
						<NavListLink to="/fileinput">FileInput</NavListLink>
						<NavListLink to="/select">Select</NavListLink>

						<NavListText>RadioGroup</NavListText>
					</VerticalNavigationList>

				</Sidebar>

				<Content style={pageContentStyle}>
					{props.children}
				</Content>

			</SidebarLayout>
			<Footer style={footerStyle}>Footer</Footer>
			{/* </FixedColumnLayout> */}
		</Container>
	);
}
