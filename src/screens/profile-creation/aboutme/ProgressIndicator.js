import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ProgressIndicator = ({ currentStep = 4, totalSteps = 8, percentage = 50 }) => (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <View style={styles.stepContainer}>
                <Text style={styles.stepText}>Step {currentStep} of {totalSteps}</Text>
            </View>
            <View style={styles.percentageContainer}>
                <Text style={styles.percentageText}>{percentage}% Complete</Text>
            </View>
        </View>
        <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: `${percentage}%` }]} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 16,
        width: '100%',
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        flexDirection: 'row',
    },
    stepContainer: {},
    stepText: {
        color: '#4B5563',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
    percentageContainer: {},
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
        overflow: 'hidden',
        backgroundColor: '#E5E7EB',
    },
    progressBar: {
        height: '100%',
        borderRadius: 9999,
        backgroundColor: '#53377A',
    },
});
