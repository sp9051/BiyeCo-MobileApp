import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FilterHeader = ({ onBack, onReset }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={onBack}
                accessibilityLabel="Go back"
            >
                <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Advanced Filters</Text>
            <TouchableOpacity style={styles.resetButton} onPress={onReset}>
                <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingRight: 20,
        paddingBottom: 16,
        paddingLeft: 20,
        backgroundColor: '#FFFFFF',
    },
    backButton: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backIcon: {
        fontSize: 24,
        color: '#4E4A6D',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#2D2640',
        margin: 0,
    },
    resetButton: {
        padding: 8,
    },
    resetText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#6C5DD3',
    },
});

export default FilterHeader;
