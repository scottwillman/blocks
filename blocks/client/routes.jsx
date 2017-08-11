import React from 'react';

import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { DocsLayout } from '/imports/layouts/docsLayout/DocsLayout.jsx';

import { ContainerDemo } from '/imports/layouts/docsLayout/pages/containerDemo.jsx';
import { ButtonDemo } from '/imports/layouts/docsLayout/pages/buttonDemo.jsx';
import { TypographyDemo } from '/imports/layouts/docsLayout/pages/typographyDemo.jsx';
import { CodeBlockDemo } from '/imports/layouts/docsLayout/pages/codeBlockDemo.jsx';
import { VerticalNavigationListDemo } from '/imports/layouts/docsLayout/pages/verticalNavigationListDemo.jsx'
import { TableDemo } from '/imports/layouts/docsLayout/pages/tableDemo.jsx';
import { ToolBarDemo } from '/imports/layouts/docsLayout/pages/toolBarDemo.jsx';
import { TagsDemo } from '/imports/layouts/docsLayout/pages/tagsDemo.jsx';
import { TextInputDemo } from '/imports/layouts/docsLayout/pages/textInputDemo.jsx';
import { FileInputDemo } from '/imports/layouts/docsLayout/pages/fileInputDemo.jsx';
import { CardsDemo } from '/imports/layouts/docsLayout/pages/cardsDemo.jsx';
import { ImagesDemo } from '/imports/layouts/docsLayout/pages/imagesDemo.jsx';
import { SelectDemo } from '/imports/layouts/docsLayout/pages/selectDemo.jsx';

// import { HorizontalNavigationListDemo } from '/imports/layouts/docsLayout/pages/horizontalNavigationListDemo.jsx'
// import { SidebarLayoutDemo } from '/imports/layouts/docsLayout/pages/sidebarLayoutDemo.jsx';
// import { SandboxLayout } from '/imports/layouts/sandboxLayout/SandboxLayout.jsx';
// import { BlogDemo } from '/imports/layouts/sandboxLayout/pages/blogDemo.jsx';

Meteor.startup(() => {
	render((
		<Router>
			<Switch>
				<Route exact path="/" render={(props) => <DocsLayout />} />
				<Route path="/container" render={(props) => <DocsLayout><ContainerDemo /></DocsLayout>} />
				<Route path="/buttons" render={(props) => <DocsLayout><ButtonDemo /></DocsLayout>} />
				<Route path="/tags" render={(props) => <DocsLayout><TagsDemo /></DocsLayout>} />
				<Route path="/table" render={(props) => <DocsLayout><TableDemo /></DocsLayout>} />
				<Route path="/codeblock" render={(props) => <DocsLayout><CodeBlockDemo /></DocsLayout>} />
				<Route path="/typography" render={(props) => <DocsLayout><TypographyDemo /></DocsLayout>} />
				<Route path="/vertical" render={(props) => <DocsLayout><VerticalNavigationListDemo /></DocsLayout>} />
				<Route path="/toolbar" render={(props) => <DocsLayout><ToolBarDemo /></DocsLayout>} />
				<Route path="/fileinput" render={(props) => <DocsLayout><FileInputDemo /></DocsLayout>} />
				<Route path="/cards" render={(props) => <DocsLayout><CardsDemo /></DocsLayout>} />
				<Route path="/textinput" render={(props) => <DocsLayout><TextInputDemo /></DocsLayout>} />
				<Route path="/images" render={(props) => <DocsLayout><ImagesDemo /></DocsLayout>} />
				<Route path="/select" render={(props) => <DocsLayout><SelectDemo /></DocsLayout>} />
			</Switch>
		</Router>
	), document.getElementById('app'));
});
