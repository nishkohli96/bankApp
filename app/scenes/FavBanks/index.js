import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ScreenHeader from '@atoms/ScreenHeader';
import { connect } from 'react-redux';
import { bankActions } from './reducer';
import { getBanks } from './selectors';
import { createStructuredSelector } from 'reselect';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

class FavBanks extends React.Component {
    
    BankItem =  ({ bank }) => {
        const nav = this.props.navigation;
        
        return (
            <TouchableOpacity onPress={ ()=> nav.navigate('BankInfo', { bankData: bank })}>
                <View style={styles.itemRow}>
                    <View style={styles.itemView}>
                        <Text style={styles.itemText}>{bank.ifsc}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>console.log('btn pressed')}>
                        <View style={styles.deleteIcon}>
                            <MaterialCommunityIcons name="delete" size={26} color="grey" />
                        </View>  
                    </TouchableOpacity>          
                </View>
            </TouchableOpacity>          
        );
    }

    render(){
        return (
            <View>
		        <ScreenHeader title="Favourites" />
		        <View style={styles.body}>
                    {this.props.bankList.map( bank => 
                        <this.BankItem key={bank.ifsc} bank={bank} />
                    )}
                </View>
	        </View>
        );
    }

}

const styles =  StyleSheet.create({
    body: {
        padding: 30,
    },
    itemRow: {
        display: 'flex',
        flexDirection: 'row',
        height: 60,
        padding: 15,
        backgroundColor: 'beige',
        marginBottom: 20,
    },
    itemView: {
        flex: 1
    },
    itemText: {
        fontSize: 20
    },
    deleteIcon: {
        display: 'flex',
        paddingRight: 15,
        paddingLeft: 15,
    }
});

const mapStateToProps = createStructuredSelector({
	bankList: getBanks(),
});

const mapDispatchToProps = (dispatch) => ({
    fetchBanks: () => dispatch({type: bankActions.getBanks, data: null})
})

export default connect(mapStateToProps, mapDispatchToProps)(FavBanks);
