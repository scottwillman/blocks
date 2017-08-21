import React from 'react';


// import { Container, Header, Footer } from '/imports/components/blocks/basics/PageLayout/PageLayout.jsx';
// import { SidebarLayout, Sidebar, Content } from '/imports/components/blocks/basics/SidebarLayout/SidebarLayout.jsx';
// import { HorizontalNavigationList, VerticalNavigationList, NavListHeading, NavListLink, NavListText} from '/imports/components/blocks/basics/NavigationLists/NavigationLists.jsx';

// import { theme } from '/imports/components/blocks/base/themes.js';

import { PageLayout, PageHeader, PageFooter } from '/imports/components/blocks/basics/PageLayout/PageLayout.jsx';
import { ColumnLayout, PrimaryColumn, SecondaryColumn } from '/imports/components/blocks/basics/ColumnLayout/ColumnLayout.jsx';
import { Heading, Paragraph, ALink } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { NavigationList } from '/imports/components/blocks/basics/NavigationList/NavigationList.jsx';



export const DocsLayout = (props) => {

	const pagePadding = "20px";
	const pageHeaderTitle = {
		color: "#fff"
	}
	const pageHeaderStyle = {
		padding: "10px " + pagePadding
	}
	const pageContentStyle = {
		padding: "0px " + pagePadding,
		minHeight: "94vh"
	}
	const pageFooterStyle = {
		padding: "20px " + pagePadding,
		position: "absolute",
		width: "100%"
	}

	const mainContainerStyle = {
		"padding": "16px",
	}
	const leftSidebarStyle = {
		"borderRight": "1px solid hsl(0,0%,90%)",
		"padding": "16px 0",
	};

	return (
		<PageLayout>
			<PageHeader style={pageHeaderStyle}>
				<ALink to="/" style={pageHeaderTitle}>Blocks React Component Framework</ALink>
			</PageHeader>

			<ColumnLayout style={pageContentStyle}>

				<SecondaryColumn style={leftSidebarStyle}>
					<Heading>Navigation</Heading>
					<NavigationList>
						<ALink to="/container">Container</ALink>
						<ALink to="/buttons">Buttons</ALink>
						<ALink to="/tags">Tags</ALink>
						<ALink to="/table">Table</ALink>
						<ALink to="/codeblock">Code Block</ALink>
						<ALink to="/typography">Typography</ALink>
						<ALink to="/vertical">Vertical Nav</ALink>
						<ALink to="/toolbar">Toolbar</ALink>
						<ALink to="/fileinput">File Input</ALink>
						<ALink to="/cards">Cards</ALink>
						<ALink to="/textinput">Text Input</ALink>
						<ALink to="/images">Images</ALink>
						<ALink to="/select">Select</ALink>
					</NavigationList>

				</SecondaryColumn>

				<PrimaryColumn style={mainContainerStyle}>
					{props.children}
				</PrimaryColumn>

			</ColumnLayout>

			<PageFooter style={pageFooterStyle}>
				PageFooter
			</PageFooter>

		</PageLayout>
	);
}
