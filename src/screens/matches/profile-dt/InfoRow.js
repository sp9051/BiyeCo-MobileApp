import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const InfoRow = ({ label, value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    label: {
        color: '#666',
        fontSize: 14,
    },
    value: {
        color: '#1A1A1A',
        fontSize: 14,
        fontWeight: '500',
    },
});

export default InfoRow;
