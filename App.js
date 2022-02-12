import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding_Screen from './components/screens/Onboarding_Screen';
import Home_Screen from './components/screens/Home_Screen';
import Cart_Screen from './components/screens/Cart_Screen';
import Search__Screen from './components/screens/Search__Screen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Onboarding" component={Onboarding_Screen} options={{ header: () => null }} />
				<Stack.Screen name="Home" component={Home_Screen} />
				<Stack.Screen name="Cart" component={Cart_Screen} />
				<Stack.Screen name="Search" component={Search__Screen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
