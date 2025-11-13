import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FlagIcon } from './SafetyIcons';

const ReportSection = ({ onReportPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <FlagIcon size={40} color="#c084fc" />
            </View>
            <Text style={styles.title}>Keep Our Community Safe</Text>
            <Text style={styles.description}>
                If you come across suspicious or disrespectful behaviour, please report the profile.
            </Text>
            <TouchableOpacity style={styles.button} onPress={onReportPress}>
                <Text style={styles.buttonText}>Report a Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3e8ff',
        borderRadius: 16,
        padding: 24,
        alignItems: 'center',
        marginTop: 8,
    },
    iconContainer: {
        marginBottom: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#c084fc',
        marginBottom: 12,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        lineHeight: 21,
        color: '#6b7280',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#6b21a8',
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 32,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default ReportSection;
