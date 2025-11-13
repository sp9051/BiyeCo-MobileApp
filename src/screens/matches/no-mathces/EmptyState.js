import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LargeSearchIcon from './LargeSearchIcon';

const EmptyState = ({ onAdjustFilters }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <LargeSearchIcon />
            </View>
            <Text style={styles.heading}>No New Matches</Text>
            <Text style={styles.description}>
                Try widening your filters or check back later for new profiles
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={onAdjustFilters}
                accessibilityLabel="Adjust Filters"
                accessibilityRole="button"
            >
                <Text style={styles.buttonText}>Adjust Filters</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    iconContainer: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#f0eef5',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 32,
    },
    heading: {
        fontSize: 28,
        fontWeight: '600',
        color: '#2d2d2d',
        marginBottom: 16,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#7d7d7d',
        lineHeight: 24,
        marginBottom: 40,
        maxWidth: 300,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#5a4a7d',
        paddingVertical: 16,
        paddingHorizontal: 48,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default EmptyState;
