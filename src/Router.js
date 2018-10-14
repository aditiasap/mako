import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Welcome from './components/unauthorized/Welcome';
import LoginPage from './components/unauthorized/LoginPage';

const Navigator = createStackNavigator({
	welcome: {
		screen: Welcome,
		navigationOptions: {
			header: null
		}
	},
	login: {
		screen: LoginPage,
		navigationOptions: {
			header: null
		}
	}
});

class Router extends Component {
	render() {
		return (
			<Navigator />
		);
	}
}

export default Router;
