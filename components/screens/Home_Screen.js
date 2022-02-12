import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Images } from '../utils/images';

const Home_Screen = () => {
	return (
		<SafeAreaView style={styles.Container}>
			<View
				style={{
					height: 190,
					width: '100%',
					backgroundColor: '#fff',
					borderRadius: 20,
					padding: 20
				}}
			>
				<Image source={Images.Burger} resizeMode="contain" style={{ width: '100%', height: 150 }} />
			</View>
			<View style={styles.body}>
				<ScrollView />
			</View>
		</SafeAreaView>
	);
};

export default Home_Screen;

const styles = StyleSheet.create({
	Container: {
		backgroundColor: '#000000',
		height: '100%',
		justifyContent: 'space-between',
		width: '100%'
	},
	body: {
		backgroundColor: '#fff',
		width: '100%',
		height: 450,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30
	}
});
