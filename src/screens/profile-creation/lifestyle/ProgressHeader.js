import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButton from './BackButton';

const ProgressHeader = ({ onBackPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <BackButton onPress={onBackPress} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Lifestyle & Interests</Text>
                </View>
            </View>
            <View style={styles.progressContainer}>
                <View style={styles.progressInfo}>
                    <Text style={styles.stepText}>Step 7 of 8</Text>
                    <Text style={styles.completeText}>87% Complete</Text>
                </View>
                <View style={styles.progressBar}>
                    <View style={styles.progressFill} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        gap: 45,
        borderBottomWidth: 0.667,
        borderBottomColor: '#F3F4F6',
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        color: '#111827',
        fontSize: 20,
        lineHeight: 28,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    progressContainer: {
        padding: 16,
        marginTop: 16,
    },
    progressInfo: {
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
    completeText: {
        color: '#53377A',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '500',
        fontFamily: 'Inter',
    },
    progressBar: {
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E5E7EB',
        overflow: 'hidden',
    },
    progressFill: {
        width: '87%',
        height: '100%',
        borderRadius: 4,
        backgroundColor: '#53377A',
    },
});

export default ProgressHeader;
