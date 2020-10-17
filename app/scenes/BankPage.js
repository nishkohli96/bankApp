import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from '@atoms/Header';
import IconContainer from '@atoms/IconContainer';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const BankIcon = () => {
    return (
        <FontAwesome name='bank' size={30} color='black' />    
    );
}

const FavouritesIcon = () => {
    return (
        <MaterialIcons name='favorite-border' size={30} color='black' />    
    );
}

const BankPage = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#d1d156' />
            <Header/>
            <View style={styles.iconContainer}>
                <IconContainer Icon={<BankIcon/>} title='Search by IFSC' />
                <IconContainer Icon={<FavouritesIcon/>} title='Favourites' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        display: 'flex',
        flex: 1,
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 20,
        padding: 30
    }
});

export default BankPage;