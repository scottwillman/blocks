import React from 'react';

import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute, IndexRedirect } from 'react-router';

import { DemoLayout } from '/imports/layouts/demoLayout/DemoLayout.jsx';
import { SidebarLayoutDemo } from '/imports/layouts/demoLayout/pages/sidebarLayoutDemo.jsx';
import { ButtonDemo } from '/imports/layouts/demoLayout/pages/buttonDemo.jsx';
import { TypographyDemo } from '/imports/layouts/demoLayout/pages/typographyDemo.jsx';
import { CodeBlockDemo } from '/imports/layouts/demoLayout/pages/codeBlockDemo.jsx';
import { VerticalNavigationListDemo } from '/imports/layouts/demoLayout/pages/verticalNavigationListDemo.jsx'
import { HorizontalNavigationListDemo } from '/imports/layouts/demoLayout/pages/horizontalNavigationListDemo.jsx'
import { TableDemo } from '/imports/layouts/demoLayout/pages/tableDemo.jsx';
import { ToolBarDemo } from '/imports/layouts/demoLayout/pages/toolBarDemo.jsx';
import { TagsDemo } from '/imports/layouts/demoLayout/pages/tagsDemo.jsx';
import { TextInputDemo } from '/imports/layouts/demoLayout/pages/textInputDemo.jsx';
import { FileInputDemo } from '/imports/layouts/demoLayout/pages/fileInputDemo.jsx';
import { CardsDemo } from '/imports/layouts/demoLayout/pages/cardsDemo.jsx';
import { ImagesDemo } from '/imports/layouts/demoLayout/pages/imagesDemo.jsx';
import { SelectDemo } from '/imports/layouts/demoLayout/pages/selectDemo.jsx';

// import { SandboxLayout } from '/imports/layouts/sandboxLayout/SandboxLayout.jsx';
// import { BlogDemo } from '/imports/layouts/sandboxLayout/pages/blogDemo.jsx';


Meteor.startup(() => {
	render((
		<Router history={browserHistory}>
			<Route path="/" component={DemoLayout}>
				<Route path="sidebarLayout" component={SidebarLayoutDemo} />
				<Route path="buttons" component={ButtonDemo} />
				<Route path="typography" component={TypographyDemo} />
				<Route path="codeblock" component={CodeBlockDemo} />
				<Route path="verticalNavigationList" component={VerticalNavigationListDemo} />
				<Route path="horizontalNavigationList" component={HorizontalNavigationListDemo} />
				<Route path="table" component={TableDemo} />
				<Route path="toolbar" component={ToolBarDemo} />
				<Route path="tags" component={TagsDemo} />
				<Route path="textinput" component={TextInputDemo} />
				<Route path="fileinput" component={FileInputDemo} />
				<Route path="cards" component={CardsDemo} />
				<Route path="images" component={ImagesDemo} />
				<Route path="select" component={SelectDemo} />
			</Route>
		</Router>
	), document.getElementById('app'));
});
