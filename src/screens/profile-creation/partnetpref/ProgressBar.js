import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ currentStep, totalSteps, percentage }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.stepText}>Step {currentStep} of {totalSteps}</Text>
                <Text style={styles.percentageText}>{percentage}% Complete</Text>
            </View>
            <View style={styles.progressBar} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    stepText: {
        fontSize: 14,
        color: '#4B5563',
        lineHeight: 20,
    },
    percentageText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#53377A',
        lineHeight: 20,
    },
    progressBar: {
        width: '100%',
        height: 8,
        borderRadius: 9999,
        backgroundColor: '#53377A',
    },
});

export default ProgressBar;
