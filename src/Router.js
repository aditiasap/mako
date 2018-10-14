import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import Welcome from './components/unauthorized/Welcome';
import LoginPage from './components/unauthorized/LoginPage';

import Account from './components/authorized/Account';
import Transaksi from './components/authorized/Transaksi';
import Jual from './components/authorized/Jual';
import Beli from './components/authorized/Beli';

import Header from './components/common/Header';

const AuthStack = createStackNavigator({
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

const tabStack = createMaterialTopTabNavigator({
	Account: { screen: Account },
	Transaksi: { screen: Transaksi },
	Jual: { screen: Jual },
	Beli: { screen: Beli }
}, {
	navigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, tintColor }) => {
			const { routeName } = navigation.state;
			if (routeName === 'Account') {
				return <MaterialIcons name="account-circle" size={25} color={tintColor} />;
			} else if (routeName === 'Transaksi') {
				return <FontAwesome name="handshake-o" size={25} color={tintColor} />;
			} else if (routeName === 'Jual') {
				return <Entypo name="shop" size={25} color={tintColor} />;
			} else if (routeName === 'Beli') {
				return <Entypo name="shopping-cart" size={25} color={tintColor} />;
			}
		},
	}),
	tabBarOptions: {
		activeTintColor: 'rgb(255, 0, 0)',
		inactiveTintColor: '#AFAFAF',
		showIcon: true,
		upperCaseLabel: false,
		style: {
			backgroundColor: '#fff',
			borderWidth: 1,
			borderColor: '#ddd'
		},
		tabStyle: {
			borderRightWidth: 1,
			borderColor: '#ddd'
		},
		indicatorStyle: {
			backgroundColor: '#fff'
		}
	}
});

const AppStack = createStackNavigator({
	Home: {
		screen: tabStack,
		navigationOptions: {
			header: <Header />
		}
	}
});

const Navigator = createSwitchNavigator({
	AuthStack,
	AppStack
});

class Router extends Component {
	render() {
		return (
			<Navigator />
		);
	}
}

export default Router;
