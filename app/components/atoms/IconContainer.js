import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

const IconContainer = ({ Icon, title, toScreen }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity onPress={() => navigation.navigate(toScreen)}>
			<View style={styles.container}>
				{Icon}
				<Text style={styles.itemText}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		alignItems: 'center',
		padding: 15,
		borderRadius: 10,
		backgroundColor: 'beige',
		width: 140,
		margin: 15
	},
	itemText: {
		marginTop: 10
	}
});

export default IconContainer;
