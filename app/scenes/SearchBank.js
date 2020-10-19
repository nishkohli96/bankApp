import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { TextInput, Snackbar } from 'react-native-paper';
import ScreenHeader from '@atoms/ScreenHeader';
import GetBankDetails from '@services/GetBankDetails';
import NetInfo from '@react-native-community/netinfo';

class SearchBank extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: null,
			visible: false,
			sbText: false
		};
	}

	componentDidMount() {
		NetInfo.addEventListener(state => {
			console.log('Connection type', state.type);
			console.log('Is connected?', state.isConnected);
		});
	}

	getBankDetails = async () => {
		if (this.state.text === null) {
			this.setState({
				visible: true,
				sbText: 'Please enter something....'
			});
		}

		const connected = (await NetInfo.fetch()).isConnected;

		if (!connected) {
			this.setState({
				visible: true,
				sbText: 'No Internet Connection Detected'
			});
		} else {
			const result = await GetBankDetails(this.state.text.trim());

			if (result.status === 200) {
				const bankObj = {
					bankName: result.data.BANK,
					address: result.data.ADDRESS,
					bankCode: result.data.BANKCODE,
					branch: result.data.BRANCH,
					centre: result.data.CENTRE,
					city: result.data.CITY,
					contact: result.data.CONTACT,
					district: result.data.DISTRICT,
					ifsc: result.data.IFSC,
					imps: result.data.IMPS,
					micr: result.data.MICR,
					neft: result.data.NEFT,
					rtgs: result.data.RTGS,
					state: result.data.STATE,
					upi: result.data.UPI
				};
				this.props.navigation.navigate('BankInfo', {
					bankData: bankObj
				});
			} else {
				this.setState({
					visible: true,
					sbText: 'No Bank Info Found'
				});
			}
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<ScreenHeader title="Search Bank" />
				<View style={styles.body}>
					<TextInput
						label="Enter IFSC Code"
						underlineColor="#d1d156"
						value={this.state.text}
						onChangeText={newText =>
							this.setState({ text: newText })
						}
						style={styles.textInput}
					/>
					<View style={styles.srchBtn}>
						<Button
							onPress={() => this.getBankDetails()}
							title="Search"
							color="#d1d156"
							accessibilityLabel="Search Bank"
						/>
					</View>
				</View>

				<Snackbar
					visible={this.state.visible}
					duration={2000}
					style={styles.snackBar}
					onDismiss={() => this.setState({ visible: false })}
				>
					{this.state.sbText}
				</Snackbar>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1
	},
	body: {
		padding: 30
	},
	textInput: {
		backgroundColor: '#edf5ef'
	},
	srchBtn: {
		marginTop: 30
	},
	snackBar: {
		position: 'absolute',
		bottom: 50,
		backgroundColor: '#595959',
		opacity: 0.7,
		borderRadius: 10,
		marginLeft: 30,
		marginRight: 30
	}
});

export default SearchBank;
