import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HobbyTag = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 13,
        color: '#333',
    },
});

export default HobbyTag;
