import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Header from '@atoms/Header';
import IconContainer from '@atoms/IconContainer';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const BankIcon = () => <FontAwesome name="bank" size={30} color="black" />;

const FavouritesIcon = () => (
  <MaterialIcons name="favorite-border" size={30} color="black" />
);

const BankPage = () => (
  <View style={styles.container}>
    <StatusBar backgroundColor="#d1d156" />
    <Header />
    <View style={styles.iconContainer}>
      <IconContainer
        Icon={<BankIcon />}
        title="Search by IFSC"
        toScreen="BankSearch"
      />
      <IconContainer
        Icon={<FavouritesIcon />}
        title="Favourites"
        toScreen="FavsList"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 30
  }
});

export default BankPage;
