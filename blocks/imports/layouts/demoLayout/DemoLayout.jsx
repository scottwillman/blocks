
import React from 'react';

import './DemoLayout.scss';

import { PageContainer } from '/imports/components/blocks/basics/Containers/Containers.jsx';
import { FixedColumnLayout, FixedColumn, ElasticContent } from '/imports/components/blocks/basics/FixedColumnLayout/FixedColumnLayout.jsx';
import { HorizontalNavigationList, VerticalNavigationList, NavListHeading, NavListLink, NavListText} from '/imports/components/blocks/basics/NavigationLists/NavigationLists.jsx';
import { Button, ButtonGroup } from '/imports/components/blocks/basics/Buttons/Buttons.jsx';

// import { ButtonDemo } from './pages/buttonDemo.jsx';
// import { TypographyDemo } from './pages/typographyDemo.jsx';
// import { CodeBlockDemo } from './pages/codeBlockDemo.jsx';
// import { FixedColumnLayoutDemo } from './pages/fixedColumnLayoutDemo.jsx';
import { ToolBar, ToolBarContainer } from '/imports/components/blocks/basics/ToolBar/ToolBar.jsx';

import { Link } from 'react-router';


export const DemoLayout = (props) => {

	const toolBarStyle = {
		backgroundColor: "#f2f2f2",
	}
	const fixedColumnStyle = {
		"paddingLeft": "0",
		"paddingRight": "0",
	}
	const fixedColumnLayoutStyle = {
		"paddingTop": "1.5rem",
	}
	const elasticContentStyle = {
		"padding": "0 1.5rem",
		"borderLeft": "solid 1px rgb(235,235,235)",
	}
	const headingSecondaryStyle = {
		"marginTop": "1rem",
	}

	return (
		<PageContainer fullWidth={true}>
			<ToolBar size="small" style={toolBarStyle}>
				<ToolBarContainer side="left">
					<HorizontalNavigationList>
						<NavListLink to="/buttons">Buttons</NavListLink>
						<NavListLink to="/toolbar">ToolBar</NavListLink>
					</HorizontalNavigationList>

				</ToolBarContainer>
			</ToolBar>

			<FixedColumnLayout style={fixedColumnLayoutStyle}>

				<FixedColumn side="left" style={fixedColumnStyle}>

					<VerticalNavigationList>
						<NavListHeading>Basic Components</NavListHeading>
						<NavListLink to="/buttons">Buttons</NavListLink>
						<NavListLink to="/typography">Typography</NavListLink>
						<NavListLink to="/codeblock">CodeBlock</NavListLink>
						<NavListLink to="/containers">Containers</NavListLink>
						<NavListLink to="/fixedcolumnlayout">FixedColumnLayout</NavListLink>
						<NavListLink to="/verticalnavigationlist">VerticalNavigationList</NavListLink>
						<NavListLink to="/horizontalnavigationlist">HorizontalNavigationList</NavListLink>
						<NavListLink to="/spreadsheet">Spreadsheet</NavListLink>
						<NavListLink to="/toolbar">ToolBar</NavListLink>
						<NavListLink to="/tags">Tags</NavListLink>

						<NavListText>Responsive Images</NavListText>
						<NavListText>Data List</NavListText>
						<NavListText>Cards</NavListText>
						<NavListText>Footer</NavListText>
						<NavListText>Icons</NavListText>

						<NavListHeading style={headingSecondaryStyle}>Forms</NavListHeading>
						<NavListLink to="/kitchensinkformsdemo">Forms Demo</NavListLink>
						<NavListLink to="/singlecolumnformlayout">SingleColumnFormLayout</NavListLink>
					</VerticalNavigationList>

				</FixedColumn>

				<ElasticContent style={elasticContentStyle}>
					{props.children}
				</ElasticContent>

			</FixedColumnLayout>
		</PageContainer>
	);
}
