import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressIndicator = ({ currentStep = 6, totalSteps = 8, percentage = 75 }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.stepText}>Step {currentStep} of {totalSteps}</Text>
                <Text style={styles.percentageText}>{percentage}% Complete</Text>
            </View>
            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${percentage}%` }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 16,
        marginTop: 16,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    stepText: {
        color: '#4B5563',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
    percentageText: {
        color: '#53377A',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '500',
        fontFamily: 'Inter',
    },
    progressBarContainer: {
        width: '100%',
        height: 8,
        borderRadius: 9999,
        backgroundColor: '#E5E7EB',
        overflow: 'hidden',
    },
    progressBar: {
        height: 8,
        borderRadius: 9999,
        backgroundColor: '#53377A',
    },
});

export default ProgressIndicator;
