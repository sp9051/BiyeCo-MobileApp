import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { InfoIcon } from './Icons';

const PrivacyNotice = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <InfoIcon />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Privacy Notice</Text>
                    <Text style={styles.description}>
                        Your contact details stay private and secure. We only use them for verification and important notifications.
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#BFDBFE',
        backgroundColor: '#E9DFF6',
        marginBottom: 24,
    },
    content: {
        flexDirection: 'row',
        gap: 12,
    },
    iconContainer: {
        marginTop: 2,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        color: '#53377A',
        marginBottom: 4,
        fontFamily: 'Inter',
    },
    description: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#53377A',
        fontFamily: 'Inter',
    },
});

export default PrivacyNotice;
