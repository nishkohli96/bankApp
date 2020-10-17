import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

const Header = () => {
    let [fontsLoaded] = useFonts({
        'Piazzolla-Bold': require('../../assets/fonts/Piazzolla-Bold.ttf'),
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <View style={styles.appBar}>
            <Text style={styles.text}>Bank Buddy</Text>
        </View>
    );
    }
};

const styles = StyleSheet.create({
    appBar: {
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#d1d156',
    },
    text: {
        fontSize: 20,
        fontFamily: 'Piazzolla-Bold'
    }
});
export default Header;