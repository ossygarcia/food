import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Images } from '../utils/images';

const Onboarding_Screen = ({ navigation }) => {
	setTimeout(() => {
		navigation.navigate('Home');
	}, 5000);
	return (
		<View style={styles.container}>
			<Image source={Images.Burger} resizeMode="contain" style={styles.image} />
			<View style={styles.textContainer}>
				<Text style={styles.text}>Welcome to Tasty Food</Text>
			</View>
		</View>
	);
};

export default Onboarding_Screen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: 200,
		justifyContent: 'center'
	},
	text: {
		fontFamily: 'Quintessential-Regular'
	},
	textContainer: {
		flex: 3,
		height: 50
	}
});
