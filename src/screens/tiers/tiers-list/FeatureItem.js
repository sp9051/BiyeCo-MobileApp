import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeatureItem = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    checkmark: {
        color: '#10b981',
        fontSize: 14,
    },
    text: {
        fontSize: 14,
        color: '#4b5563',
    },
});

export default FeatureItem;
