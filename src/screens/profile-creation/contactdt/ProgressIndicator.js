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
        marginBottom: 32,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    stepText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#4B5563',
        fontFamily: 'Inter',
    },
    percentageText: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        color: '#53377A',
        fontFamily: 'Inter',
    },
    progressBarContainer: {
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E5E7EB',
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        borderRadius: 4,
        backgroundColor: '#53377A',
    },
});

export default ProgressIndicator;
