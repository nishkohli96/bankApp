import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

const Header = () => {
	const [fontsLoaded] = useFonts({
		'Piazzolla-Bold': require('../../assets/fonts/Piazzolla-Bold.ttf')
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<View style={styles.appBar}>
			<StatusBar backgroundColor="#d1d156" />
			<Text style={styles.text}>Bank Buddy</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	appBar: {
		display: 'flex',
		alignItems: 'center',
		padding: 15,
		paddingLeft: 30,
		backgroundColor: '#d1d156'
	},
	text: {
		fontSize: 25,
		fontFamily: 'Piazzolla-Bold'
	}
});
export default Header;
