import React from 'react';

import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute, IndexRedirect } from 'react-router';

import { DocsLayout } from '/imports/layouts/docsLayout/DocsLayout.jsx';

import { ContainerDemo } from '/imports/layouts/docsLayout/pages/containerDemo.jsx';
// import { SidebarLayoutDemo } from '/imports/layouts/docsLayout/pages/sidebarLayoutDemo.jsx';
import { ButtonDemo } from '/imports/layouts/docsLayout/pages/buttonDemo.jsx';
// import { TypographyDemo } from '/imports/layouts/docsLayout/pages/typographyDemo.jsx';
// import { CodeBlockDemo } from '/imports/layouts/docsLayout/pages/codeBlockDemo.jsx';
// import { VerticalNavigationListDemo } from '/imports/layouts/docsLayout/pages/verticalNavigationListDemo.jsx'
// import { HorizontalNavigationListDemo } from '/imports/layouts/docsLayout/pages/horizontalNavigationListDemo.jsx'
import { TableDemo } from '/imports/layouts/docsLayout/pages/tableDemo.jsx';
// import { ToolBarDemo } from '/imports/layouts/docsLayout/pages/toolBarDemo.jsx';
import { TagsDemo } from '/imports/layouts/docsLayout/pages/tagsDemo.jsx';
// import { TextInputDemo } from '/imports/layouts/docsLayout/pages/textInputDemo.jsx';
// import { FileInputDemo } from '/imports/layouts/docsLayout/pages/fileInputDemo.jsx';
// import { CardsDemo } from '/imports/layouts/docsLayout/pages/cardsDemo.jsx';
// import { ImagesDemo } from '/imports/layouts/docsLayout/pages/imagesDemo.jsx';
// import { SelectDemo } from '/imports/layouts/docsLayout/pages/selectDemo.jsx';

// import { SandboxLayout } from '/imports/layouts/sandboxLayout/SandboxLayout.jsx';
// import { BlogDemo } from '/imports/layouts/sandboxLayout/pages/blogDemo.jsx';


Meteor.startup(() => {
	render((
		<Router history={browserHistory}>
			<Route path="/" component={DocsLayout}>
				{/* <Route path="containers" component={ContainerDemo} />
				<Route path="sidebarLayout" component={SidebarLayoutDemo} />
				<Route path="typography" component={TypographyDemo} />
				<Route path="codeblock" component={CodeBlockDemo} />
				<Route path="verticalNavigationList" component={VerticalNavigationListDemo} />
				<Route path="horizontalNavigationList" component={HorizontalNavigationListDemo} />
				<Route path="toolbar" component={ToolBarDemo} /> */}
				<Route path="buttons" component={ButtonDemo} />
				<Route path="tags" component={TagsDemo} />
				<Route path="table" component={TableDemo} />
				{/* <Route path="textinput" component={TextInputDemo} />
				<Route path="fileinput" component={FileInputDemo} />
				<Route path="cards" component={CardsDemo} />
				<Route path="images" component={ImagesDemo} />
				<Route path="select" component={SelectDemo} /> */}
			</Route>
		</Router>
	), document.getElementById('app'));
});
