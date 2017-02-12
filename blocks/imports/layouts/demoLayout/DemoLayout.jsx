
import React from 'react';

// import './DemoLayout.scss';

import { Layout, Header, Sidebar, Content, Footer } from '/imports/components/blocks/basics/Layout/Layout.jsx';
import { HorizontalNavigationList, VerticalNavigationList, NavListHeading, NavListLink, NavListText} from '/imports/components/blocks/basics/NavigationLists/NavigationLists.jsx';


export const DemoLayout = (props) => {

	// const toolBarStyle = {
	// 	backgroundColor: "#f2f2f2",
	// }
	// const fixedColumnStyle = {
	// 	"paddingLeft": "0",
	// 	"paddingRight": "0",
	// }
	// const fixedColumnLayoutStyle = {
	// 	"paddingTop": "1.5rem",
	// }
	// const elasticContentStyle = {
	// 	"padding": "0 1.5rem",
	// 	"borderLeft": "solid 1px rgb(235,235,235)",
	// }
	const headingSecondaryStyle = {
		"marginTop": "1rem",
	};
	const leftSidebarStyle = {
		"borderRight": "1px solid hsl(0,0%,90%)",
	};
	const mainContainerStyle = {
		"margin": "24px 0",
	};
	const pageContentStyle = {
		"padding": "0 24px",
	}

	return (
		<Layout>
			<Header>Header</Header>
			<Content style={mainContainerStyle}>
			{/* <FixedColumnLayout style={fixedColumnLayoutStyle}> */}

				<Sidebar style={leftSidebarStyle}>

					<VerticalNavigationList>
						<NavListHeading>Basic Components</NavListHeading>
						<NavListLink to="/layout">Layout</NavListLink>
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

			</Content>
			<Footer>Footer</Footer>
			{/* </FixedColumnLayout> */}
		</Layout>
	);
}
