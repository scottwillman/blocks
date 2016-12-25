import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute, IndexRedirect } from 'react-router';

import { DemoLayout } from '/imports/layouts/demoLayout/DemoLayout.jsx';
import { ButtonDemo } from '/imports/layouts/demoLayout/pages/buttonDemo.jsx';
import { TypographyDemo } from '/imports/layouts/demoLayout/pages/typographyDemo.jsx';
import { CodeBlockDemo } from '/imports/layouts/demoLayout/pages/codeBlockDemo.jsx';
import { ContainersDemo } from '/imports/layouts/demoLayout/pages/containersDemo.jsx';
import { FixedColumnLayoutDemo } from '/imports/layouts/demoLayout/pages/fixedColumnLayoutDemo.jsx';
import { VerticalNavigationListDemo } from '/imports/layouts/demoLayout/pages/verticalNavigationListDemo.jsx'
import { HorizontalNavigationListDemo } from '/imports/layouts/demoLayout/pages/horizontalNavigationListDemo.jsx'
import { SpreadsheetDemo } from '/imports/layouts/demoLayout/pages/spreadsheetDemo.jsx';
import { ToolBarDemo } from '/imports/layouts/demoLayout/pages/toolBarDemo.jsx';
import { TagsDemo } from '/imports/layouts/demoLayout/pages/tagsDemo.jsx';
import { SingleColumnFormLayoutDemo } from '/imports/layouts/demoLayout/pages/singleColumnFormLayoutDemo.jsx';
import { KitchenSinkFormDemo } from '/imports/layouts/demoLayout/pages/kitchenSinkFormDemo.jsx';


Meteor.startup(() => {
	render((
		<Router history={browserHistory}>
			<Route path="/" component={DemoLayout}>
				<Route path="buttons" component={ButtonDemo} />
				<Route path="typography" component={TypographyDemo} />
				<Route path="codeblock" component={CodeBlockDemo} />
				<Route path="containers" component={ContainersDemo} />
				<Route path="fixedcolumnlayout" component={FixedColumnLayoutDemo} />
				<Route path="verticalNavigationList" component={VerticalNavigationListDemo} />
				<Route path="horizontalNavigationList" component={HorizontalNavigationListDemo} />
				<Route path="spreadsheet" component={SpreadsheetDemo} />
				<Route path="toolbar" component={ToolBarDemo} />
				<Route path="tags" component={TagsDemo} />
				<Route path="singlecolumnformlayout" component={SingleColumnFormLayoutDemo} />
				<Route path="kitchensinkformsdemo" component={KitchenSinkFormDemo} />
			</Route>
		</Router>
	), document.getElementById('app'));
});
