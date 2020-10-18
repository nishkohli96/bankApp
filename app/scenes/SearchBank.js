import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import ScreenHeader from '@atoms/ScreenHeader';
import GetBankDetails from '@services/GetBankDetails';
import { useNavigation } from 'react-navigation-hooks';

const SearchBank = () => {
	const [text, setText] = React.useState('');
  const navigation = useNavigation();

	const getBankDetails = () => {
    // console.log(text);
    // GetBankDetails(text);
    navigation.navigate('BankInfo');
	};

	return (
		<View>
			<ScreenHeader title="Search Bank" />
			<View style={styles.body}>
				<TextInput
					label="Enter IFSC Code"
					underlineColor="#d1d156"
					value={text}
					onChangeText={text => setText(text)}
					style={styles.textInput}
				/>
				<View style={styles.srchBtn}>
					<Button
						onPress={() => getBankDetails()}
						title="Search"
						color="#d1d156"
						accessibilityLabel="Search Bank"
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		padding: 30
	},
	textInput: {
		backgroundColor: '#edf5ef'
	},
	srchBtn: {
		marginTop: 30
	}
});

export default SearchBank;
