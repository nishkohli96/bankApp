import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { Divider } from 'react-native-paper';
import ScreenHeader from '@atoms/ScreenHeader';
import { useNavigation } from 'react-navigation-hooks';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import Constants from 'expo-constants';

const BankDetails = () => {
    const navigation = useNavigation();
    const BANKINFO = navigation.state.params.bankData;
    const [fav, setFav] = useState(false);
	const [fontsLoaded] = useFonts({
		'Piazzolla-Bold': require('@assets/fonts/Piazzolla-Bold.ttf'),
		'Piazzolla-Light': require('@assets/fonts/Piazzolla-Light.ttf')
	});

	const [bankName, setBankName] = useState(BANKINFO.BANK);
	const [bankCode, setBankCode] = useState(BANKINFO.BANKCODE);
	const [ifsc, setIFSC] = useState(BANKINFO.IFSC);
	const [branch, setBranch] = useState(BANKINFO.BRANCH);
	const [address, setAddress] = useState(BANKINFO.ADDRESS);
	const [contact, setContact] = useState(BANKINFO.CONTACT);
	const [city, setCity] = useState(BANKINFO.CITY);
	const [district, setDistrict] = useState(BANKINFO.DISTRICT);
	const [state, setState] = useState(BANKINFO.STATE);
	const [centre, setCentre] = useState(BANKINFO.CENTRE);

	const [imps, setIMPS] = useState(BANKINFO.IMPS);
	const [micr, setMICR] = useState(BANKINFO.MICR);
	const [upi, setUPI] = useState(BANKINFO.UPI);
	const [rtgs, setRTGS] = useState(BANKINFO.RTGS);
    const [neft, setNEFT] = useState(BANKINFO.NEFT);
    
    const FavSelected = () => {
        return <FontAwesome name="heart" size={30} color="pink" />
    };

    const FavNotSelected = () => {
        return <FontAwesome5 name="heart" size={30} color="pink" />
    };

    const setFavourite = () => {
        setFav(fav => !fav );
    }

    if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<View>
			<ScreenHeader title="Bank Details" />
			<View style={styles.body}>
            <SafeAreaView style={styles.safeArea}>
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
								{address}
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
							<Text style={styles.key}>Centre : </Text>
						</View>
						<View style={styles.valueView}>
							<Text style={styles.value}>{centre}</Text>
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
                            <TouchableOpacity onPress={() => setFavourite()}>
                                { fav? <FavSelected/> : <FavNotSelected/> } 
                                </TouchableOpacity>
  
                            </View>

					</View>

				</ScrollView>
                </SafeAreaView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	body: {
        padding: 30,
        paddingRight: 0,
        marginBottom: 30,
    },
    safeArea: {
        marginBottom: 70,
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
        flex: 0.7,
        marginRight: 10
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
        borderWidth: 1,
        borderColor: 'silver',
        backgroundColor: '#edf5ef',
        right: 20,
        bottom: 40,
        borderRadius: 50,
        padding: 15
    }
});

export default BankDetails;
