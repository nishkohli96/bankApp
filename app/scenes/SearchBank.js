import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput, Snackbar } from 'react-native-paper';
import ScreenHeader from '@atoms/ScreenHeader';
import GetBankDetails from '@services/GetBankDetails';
import { useNavigation } from 'react-navigation-hooks';
import { useNetInfo} from "@react-native-community/netinfo";

const SearchBank = () => {
  const navigation = useNavigation();
  const netInfo = useNetInfo();
  const [text, setText] = React.useState(null);
  
  const [visible, setVisible] = React.useState(false);
  const [sbText, setsbText] = React.useState(null);
  const onDismissSnackBar = () => setVisible(false);

	const getBankDetails = async () => {
    if(text === null){
      setVisible(true);
      setsbText('Please enter something....')
    }
    else if (!netInfo.isConnected){
      setVisible(true);
      setsbText('No Internet Connection Detected')
    } 
    else {
		  const result = await GetBankDetails(text.trim());

		  if (result.status === 200) {
			  navigation.navigate('BankInfo', { bankData: result.data });
      } 
      else 
      {
        setVisible(true);
        setsbText('No Bank Info Found')
      }
    }
	};

	return (
		<View style={styles.container}>
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

      <Snackbar visible={visible} duration={2000} style={styles.snackBar} onDismiss={() => setVisible(false)}>
        {sbText}
      </Snackbar>
		</View>
	);
};

const styles = StyleSheet.create({
  container:{
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
