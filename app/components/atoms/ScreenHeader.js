import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks';

const ScreenHeader = ({ title }) => {
	const [fontsLoaded] = useFonts({
		'Piazzolla-Bold': require('../../assets/fonts/Piazzolla-Bold.ttf')
	});
	const navigation = useNavigation();

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<View style={styles.appBar}>
			<StatusBar backgroundColor="#d1d156" />
			<Ionicons
				name="md-arrow-back"
				size={24}
				color="black"
				onPress={() => navigation.goBack()}
			/>
			<Text style={styles.text}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	appBar: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		paddingLeft: 30,
		backgroundColor: '#d1d156'
	},
	text: {
		fontSize: 25,
		marginLeft: 30,
		fontFamily: 'Piazzolla-Bold'
	}
});
export default ScreenHeader;
