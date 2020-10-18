import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenHeader from '@atoms/ScreenHeader';
import { connect } from 'react-redux';
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
        console.log(this.state);
		// this.props.fetchBanks();
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
    console.log(state.bank)
    return {
      banksList : state.bank.banksList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      reduxIncreaseCounter: () => console.log('inc'),
      reduxDecreaseCounter: () => console.log('dec'),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavBanks);
