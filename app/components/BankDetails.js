import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { Divider } from 'react-native-paper';
import ScreenHeader from '@atoms/ScreenHeader';

const BankDetails = () => {
	const [fontsLoaded] = useFonts({
		'Piazzolla-Bold': require('@assets/fonts/Piazzolla-Bold.ttf'),
		'Piazzolla-Light': require('@assets/fonts/Piazzolla-Light.ttf')
	});

	const [bankName, setBankName] = useState('Bank');
	const [bankCode, setBankCode] = useState('Bc');
	const [ifsc, setIFSC] = useState('Bank');
	const [branch, setBranch] = useState('Bank');
	const [address, setAddress] = useState('Bank');
	const [contact, setContact] = useState('Bank');
	const [city, setCity] = useState('Bank');
	const [district, setDistrict] = useState('Bank');
	const [state, setState] = useState('Bank');
	const [center, setCenter] = useState('os');

	const [imps, setIMPS] = useState(true);
	const [micr, setMICR] = useState(true);
	const [upi, setUPI] = useState(true);
	const [rtgs, setRTGS] = useState(true);
    const [neft, setNEFT] = useState(true);
    
    if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<View>
			<ScreenHeader title="Bank Details" />
			<View style={styles.body}>
				<ScrollView>
					<View style={styles.desc}>
						<View style={styles.keyView}>
							<Text style={styles.key}>Name : </Text>
						</View>
						<View style={styles.valueView}>
							<Text style={styles.value}>{bankName}</Text>
						</View>
					</View>

					<View style={styles.desc}>
						<View style={styles.keyView}>
							<Text style={styles.key}>Code : </Text>
						</View>
						<View style={styles.valueView}>
							<Text style={styles.value}>{bankCode}</Text>
						</View>
					</View>

					<View style={styles.desc}>
						<View style={styles.keyView}>
							<Text style={styles.key}>IFSC : </Text>
						</View>
						<View style={styles.valueView}>
							<Text style={styles.value}>{ifsc}</Text>
						</View>
					</View>

					<View style={styles.desc}>
						<View style={styles.keyView}>
							<Text style={styles.key}>Branch : </Text>
						</View>
						<View style={styles.valueView}>
							<Text style={styles.value}>{branch}</Text>
						</View>
					</View>

					<View style={styles.desc}>
						<View style={styles.keyView}>
							<Text style={styles.key}>Address : </Text>
						</View>
						<View style={styles.valueView}>
							<Text style={styles.value}>
								REGD. & HEAD OFFICE, P.B.NO.599, MAHAVEER
								CIRCLE, KANKANADY, MANGALORE - 575002
							</Text>
						</View>
					</View>

					<View style={styles.desc}>
						<View style={styles.keyView}>
							<Text style={styles.key}>Contact : </Text>
						</View>
						<View style={styles.valueView}>
							<Text style={styles.value}>{contact}</Text>
						</View>
					</View>

					<View style={styles.desc}>
						<View style={styles.keyView}>
							<Text style={styles.key}>City : </Text>
						</View>
						<View style={styles.valueView}>
							<Text style={styles.value}>{city}</Text>
						</View>
					</View>

					<View style={styles.desc}>
						<View style={styles.keyView}>
							<Text style={styles.key}>District : </Text>
						</View>
						<View style={styles.valueView}>
							<Text style={styles.value}>{district}</Text>
						</View>
					</View>

					<View style={styles.desc}>
						<View style={styles.keyView}>
							<Text style={styles.key}>State : </Text>
						</View>
						<View style={styles.valueView}>
							<Text style={styles.value}>{state}</Text>
						</View>
					</View>
					<Divider />

					<View style={styles.paymentView}>
						<View style={{ marginBottom: 20 }}>
							<Text style={styles.key}> Payment Methods</Text>
						</View>

						<View style={styles.desc}>
							<View style={styles.keyView}>
								<Text style={styles.key}>RTGS : </Text>
							</View>
							<View style={styles.valueView}>
								<Text style={styles.value}>
									{rtgs ? 'Yes' : 'No'}
								</Text>
							</View>
						</View>

                        <View style={styles.desc}>
							<View style={styles.keyView}>
								<Text style={styles.key}>NEFT : </Text>
							</View>
							<View style={styles.valueView}>
								<Text style={styles.value}>
									{neft ? 'Yes' : 'No'}
								</Text>
							</View>
						</View>

                        <View style={styles.desc}>
							<View style={styles.keyView}>
								<Text style={styles.key}>MICR : </Text>
							</View>
							<View style={styles.valueView}>
								<Text style={styles.value}>
									{micr ? 'Yes' : 'No'}
								</Text>
							</View>
						</View>

                        <View style={styles.desc}>
							<View style={styles.keyView}>
								<Text style={styles.key}>IMPS : </Text>
							</View>
							<View style={styles.valueView}>
								<Text style={styles.value}>
									{imps ? 'Yes' : 'No'}
								</Text>
							</View>
						</View>

                        <View style={styles.desc}>
							<View style={styles.keyView}>
								<Text style={styles.key}>UPI : </Text>
							</View>
							<View style={styles.valueView}>
								<Text style={styles.value}>
									{upi ? 'Yes' : 'No'}
								</Text>
							</View>
						</View>

                        <View style={styles.fabView}>
                            <Text>hi</Text>
                        </View>

					</View>

				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
		padding: 30
	},
	desc: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 20
	},
	keyView: {
		flex: 0.3
	},
	key: {
		fontFamily: 'Piazzolla-Bold',
		fontSize: 20,
		marginLeft: 10
	},
	valueView: {
		flex: 0.7
	},
	value: {
		fontFamily: 'Piazzolla-Light',
		fontSize: 20
	},
	paymentView: {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: 20,
		marginTop: 20,
		alignItems: 'center'
    },
    fabView: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: 'pink',
        borderRadius: 50,
        padding: 20
    }
});

export default BankDetails;
