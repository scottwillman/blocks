import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute, IndexRedirect } from 'react-router';

import { DemoLayout } from '/imports/layouts/demoLayout/DemoLayout.jsx';

Meteor.startup(() => {
	render((
		<Router history={browserHistory}>
			<Route path="/" component={DemoLayout} />
		</Router>
	), document.getElementById('app'));
});
