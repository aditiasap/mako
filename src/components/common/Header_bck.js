import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Platform
} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';

class Header extends Component {
	render() {
		return (
			<View style={styles.topContainer}>
				<View style={styles.logoContainer}>
					<Text style={styles.logoText}>Mako</Text>
				</View>
				<View style={styles.inputContainer}>
					<Ionicon name="ios-search" size={25} color="#000" style={styles.iconStyle} />
					<TextInput
						placeholder='pilih lokasi "jakarta"'
						placeholderTextColor="#989898"
						autoCapitalize="none"
						autoCorrect={false}
						underlineColorAndroid="transparent"
						style={styles.input}
						returnKeyType="search"
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	topContainer: {
		paddingTop: (Platform.OS === 'ios' ? 20 : 0),
		paddingHorizontal: 15,
		backgroundColor: '#fff'
	},
	logoContainer: {
		marginTop: 10,
		marginHorizontal: 10
	},
	inputContainer: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 10,
		marginTop: 10,
		marginBottom: 20,
		alignItems: 'center',
		paddingHorizontal: 10
	},
	iconStyle: {
		paddingVertical: 5,
		paddingRight: 10
	},
	input: {
		flex: 1,
		color: '#000'
	},
	logoText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#FF0000'
	}
});

export default Header;
