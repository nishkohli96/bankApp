import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	SafeAreaView,
	ScrollView
} from 'react-native';
import { Divider, Snackbar } from 'react-native-paper';
import ScreenHeader from '@atoms/ScreenHeader';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { bankActions } from '@scenes/FavBanks/reducer';
import { getBanks } from '@scenes/FavBanks/selectors';
import { createStructuredSelector } from 'reselect';

const FavSelected = () => {
	return <FontAwesome name="heart" size={30} color="pink" />;
};

const FavNotSelected = () => {
	return <FontAwesome5 name="heart" size={30} color="pink" />;
};

class BankDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fav: false,
			visible: false,
			sbText: null
		};
	}

	setFavourite() {
		if(this.props.bankList.length >= 10){
			this.setState({ 
				visible: true,
				sbText: 'Max 10 Entries can be saved' 
			});
		} 
		else if (!this.state.fav) {
			this.setState({ 
				fav: true,
				visible: true,
				sbText: 'Bank added to Favourites'
			});
			const bankObj = this.props.navigation.state.params.bankData;
			this.props.addBank(bankObj);
		}
	}

	render() {
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
									<Text style={styles.value}>
										{
											this.props.navigation.state.params
												.bankData.bankName
										}
									</Text>
								</View>
							</View>

							<View style={styles.desc}>
								<View style={styles.keyView}>
									<Text style={styles.key}>Code : </Text>
								</View>
								<View style={styles.valueView}>
									<Text style={styles.value}>
										{
											this.props.navigation.state.params
												.bankData.bankCode
										}
									</Text>
								</View>
							</View>

							<View style={styles.desc}>
								<View style={styles.keyView}>
									<Text style={styles.key}>IFSC : </Text>
								</View>
								<View style={styles.valueView}>
									<Text style={styles.value}>
										{
											this.props.navigation.state.params
												.bankData.ifsc
										}
									</Text>
								</View>
							</View>

							<View style={styles.desc}>
								<View style={styles.keyView}>
									<Text style={styles.key}>Branch : </Text>
								</View>
								<View style={styles.valueView}>
									<Text style={styles.value}>
										{
											this.props.navigation.state.params
												.bankData.branch
										}
									</Text>
								</View>
							</View>

							<View style={styles.desc}>
								<View style={styles.keyView}>
									<Text style={styles.key}>Address : </Text>
								</View>
								<View style={styles.valueView}>
									<Text style={styles.value}>
										{
											this.props.navigation.state.params
												.bankData.address
										}
									</Text>
								</View>
							</View>

							<View style={styles.desc}>
								<View style={styles.keyView}>
									<Text style={styles.key}>Contact : </Text>
								</View>
								<View style={styles.valueView}>
									<Text style={styles.value}>
										{
											this.props.navigation.state.params
												.bankData.contact
										}
									</Text>
								</View>
							</View>

							<View style={styles.desc}>
								<View style={styles.keyView}>
									<Text style={styles.key}>City : </Text>
								</View>
								<View style={styles.valueView}>
									<Text style={styles.value}>
										{
											this.props.navigation.state.params
												.bankData.city
										}
									</Text>
								</View>
							</View>

							<View style={styles.desc}>
								<View style={styles.keyView}>
									<Text style={styles.key}>District : </Text>
								</View>
								<View style={styles.valueView}>
									<Text style={styles.value}>
										{
											this.props.navigation.state.params
												.bankData.district
										}
									</Text>
								</View>
							</View>

							<View style={styles.desc}>
								<View style={styles.keyView}>
									<Text style={styles.key}>Centre : </Text>
								</View>
								<View style={styles.valueView}>
									<Text style={styles.value}>
										{
											this.props.navigation.state.params
												.bankData.centre
										}
									</Text>
								</View>
							</View>

							<View style={styles.desc}>
								<View style={styles.keyView}>
									<Text style={styles.key}>State : </Text>
								</View>
								<View style={styles.valueView}>
									<Text style={styles.value}>
										{
											this.props.navigation.state.params
												.bankData.state
										}
									</Text>
								</View>
							</View>
							<Divider />

							<View style={styles.paymentView}>
								<View style={{ marginBottom: 20 }}>
									<Text style={styles.key}>
										{' '}
										Payment Methods
									</Text>
								</View>

								<View style={styles.desc}>
									<View style={styles.keyView}>
										<Text style={styles.key}>RTGS : </Text>
									</View>
									<View style={styles.valueView}>
										<Text style={styles.value}>
											{this.props.navigation.state.params
												.bankData.rtgs
												? 'Yes'
												: 'No'}
										</Text>
									</View>
								</View>

								<View style={styles.desc}>
									<View style={styles.keyView}>
										<Text style={styles.key}>NEFT : </Text>
									</View>
									<View style={styles.valueView}>
										<Text style={styles.value}>
											{this.props.navigation.state.params
												.bankData.neft
												? 'Yes'
												: 'No'}
										</Text>
									</View>
								</View>

								<View style={styles.desc}>
									<View style={styles.keyView}>
										<Text style={styles.key}>MICR : </Text>
									</View>
									<View style={styles.valueView}>
										<Text style={styles.value}>
											{this.props.navigation.state.params
												.bankData.micr
												? 'Yes'
												: 'No'}
										</Text>
									</View>
								</View>

								<View style={styles.desc}>
									<View style={styles.keyView}>
										<Text style={styles.key}>IMPS : </Text>
									</View>
									<View style={styles.valueView}>
										<Text style={styles.value}>
											{this.props.navigation.state.params
												.bankData.imps
												? 'Yes'
												: 'No'}
										</Text>
									</View>
								</View>

								<View style={styles.desc}>
									<View style={styles.keyView}>
										<Text style={styles.key}>UPI : </Text>
									</View>
									<View style={styles.valueView}>
										<Text style={styles.value}>
											{this.props.navigation.state.params
												.bankData.upi
												? 'Yes'
												: 'No'}
										</Text>
									</View>
								</View>
							</View>
						</ScrollView>
					</SafeAreaView>

					<View style={styles.fabView}>
						<TouchableOpacity
							onPress={this.setFavourite.bind(this)}
						>
							{this.state.fav ? FavSelected() : FavNotSelected()}
						</TouchableOpacity>
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
			</View>
		);
	}
}

const styles = StyleSheet.create({
	body: {
		padding: 30,
		paddingRight: 0,
		marginBottom: 30
	},
	safeArea: {
		marginBottom: 70
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
		// fontFamily: 'Piazzolla-Bold',
		fontSize: 20,
		marginLeft: 10
	},
	valueView: {
		flex: 0.7,
		marginRight: 10
	},
	value: {
		// fontFamily: 'Piazzolla-Light',
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
		right: 40,
		bottom: 140,
		borderRadius: 50,
		padding: 15
	},
	snackBar: {
		position: 'absolute',
		bottom: 140,
		backgroundColor: '#595959',
		borderRadius: 10,
		marginLeft: 70,
		marginRight: 80
	}
});

const mapStateToProps = createStructuredSelector({
	bankList: getBanks()
});

const mapDispatchToProps = dispatch => ({
	addBank: obj => dispatch({ type: bankActions.addBank(), data: obj })
});

export default connect(mapStateToProps, mapDispatchToProps)(BankDetails);
