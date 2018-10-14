import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Welcome from './components/unauthorized/Welcome';

const Navigator = createStackNavigator({
	welcome: {
		screen: Welcome,
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
