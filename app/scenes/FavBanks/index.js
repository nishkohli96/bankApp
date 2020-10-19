import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenHeader from '@atoms/ScreenHeader';
import { connect } from 'react-redux';
import { bankActions } from './reducer';

import { compose } from 'redux';
import { PropTypes } from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';

class FavBanks extends React.Component {

    componentDidMount() {
		this.getFavBanks()();
	}

	getFavBanks = () => () => {
        console.log('get list');
		this.props.fetchBanks();
    };
    
    render(){
        return (
            <View>
		        <ScreenHeader title="Favourites" />
		        <Text>favs banks</Text>
	        </View>
        );
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    return {}
    // return {
    //   banksList : state.bank.banksList,
    // };
};

const mapDispatchToProps = (dispatch) => ({
    fetchBanks: () => dispatch(bankActions.getBanks())
});

export default connect(mapStateToProps, mapDispatchToProps)(FavBanks);
