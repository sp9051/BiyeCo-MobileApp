import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressIndicator = ({ currentStep, totalSteps, percentage }) => {
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
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 16,
        marginTop: 16,
        gap: 8,
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    stepText: {
        color: '#4B5563',
        fontFamily: 'Inter',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
    },
    percentageText: {
        color: '#53377A',
        fontFamily: 'Inter',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '500',
    },
    progressBarContainer: {
        width: '100%',
        height: 8,
        borderRadius: 9999,
        backgroundColor: '#E5E7EB',
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        borderRadius: 9999,
        backgroundColor: '#53377A',
    },
});

export default ProgressIndicator;
