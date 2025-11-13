import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SuccessMessage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thank You!</Text>
            <View style={styles.messageContainer}>
                <Text style={styles.message}>Your report has been received.</Text>
                <Text style={styles.message}>Our Trust Team will review it within 24 hours.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 26,
    },
    title: {
        color: '#111827',
        textAlign: 'center',
        marginBottom: 13,
        fontSize: 20,
        lineHeight: 28,
        fontWeight: '700',
        fontFamily: 'Inter',
    },
    messageContainer: {
        maxWidth: 236,
        alignItems: 'center',
    },
    message: {
        color: '#4B5563',
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
});

export default SuccessMessage;
