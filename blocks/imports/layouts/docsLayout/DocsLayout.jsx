import React from 'react';
import { Link } from 'react-router'

// import { Container, Header, Footer } from '/imports/components/blocks/basics/PageLayout/PageLayout.jsx';
// import { SidebarLayout, Sidebar, Content } from '/imports/components/blocks/basics/SidebarLayout/SidebarLayout.jsx';
// import { HorizontalNavigationList, VerticalNavigationList, NavListHeading, NavListLink, NavListText} from '/imports/components/blocks/basics/NavigationLists/NavigationLists.jsx';

// import { theme } from '/imports/components/blocks/base/themes.js';

import { PageLayout, PageHeader, PageFooter } from '/imports/components/blocks/basics/PageLayout/PageLayout.jsx';
import { ColumnLayout, PrimaryColumn, SecondaryColumn } from '/imports/components/blocks/basics/ColumnLayout/ColumnLayout.jsx';
import { Heading, Paragraph } from '/imports/components/blocks/basics/Typography/Typography.jsx';
import { NavigationList } from '/imports/components/blocks/basics/NavigationList/NavigationList.jsx';



export const DocsLayout = (props) => {

	const pagePadding = "20px";
	const pageHeaderStyle = {
		padding: "10px " + pagePadding,
	}
	const pageContentStyle = {
		padding: "0px " + pagePadding,
	}
	const pageFooterStyle = {
		padding: "20px " + pagePadding,
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
				Blocks React Component Framework
			</PageHeader>

			<ColumnLayout style={pageContentStyle}>

				<SecondaryColumn style={leftSidebarStyle}>
					<Heading>Navigation</Heading>
					<NavigationList>
						<Link to="/buttons">Buttons</Link>
						<Link to="/tags">Tags</Link>
						<Link to="/table">Table</Link>
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
