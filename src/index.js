import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Main from 'Main';
import SignIn from 'SignIn';
import SignUp from 'SignUp';
import Welcome from 'Welcome';

render((
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="signin" component={SignIn} />
			<Route path="signup" component={SignUp} />
			<IndexRoute component={Welcome} />
		</Route>
	</Router>
), document.getElementById('app'));