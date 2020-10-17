import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const IconContainer = ({Icon, title}) => {
    return (
        <View style={styles.container}>
            {Icon}
    <Text style={styles.itemText}>{title}</Text>
        </View>
    );
}

const styles =  StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        padding: 15,
        borderRadius:10,
        backgroundColor: 'beige',
        width: 140,
        marginRight: 30
    },
    itemText: {
        marginTop: 10
    }
});

export default IconContainer;