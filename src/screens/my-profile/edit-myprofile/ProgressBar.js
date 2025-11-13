import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ completion }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.label}>Profile Completion</Text>
                <View style={styles.percentageContainer}>
                    <Text style={styles.percentage}>{completion}</Text>
                    <Text style={styles.percentage}>%</Text>
                </View>
            </View>
            <View style={styles.progressBarContainer}>
                <View
                    style={[
                        styles.progressBar,
                        { width: `${completion}%` }
                    ]}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    label: {
        fontSize: 14,
        color: '#6b7280',
        fontWeight: '500',
    },
    percentageContainer: {
        flexDirection: 'row',
    },
    percentage: {
        fontSize: 16,
        color: '#6366f1',
        fontWeight: '600',
    },
    progressBarContainer: {
        width: '100%',
        height: 8,
        backgroundColor: '#e5e7eb',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#6366f1',
        borderRadius: 4,
    },
});

export default ProgressBar;
