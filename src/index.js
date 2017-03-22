import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Main from 'Main';
import Welcome from 'Welcome';

render((
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Welcome} />
		</Route>
	</Router>
), document.getElementById('app'));