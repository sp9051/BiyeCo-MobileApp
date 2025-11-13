import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FilterHeader = ({ onClose, onReset }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Filters</Text>
            </View>
            <TouchableOpacity onPress={onReset} style={styles.resetButton}>
                <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
    },
    closeButton: {
        padding: 0,
    },
    closeText: {
        fontSize: 24,
        color: '#5b3a8f',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1f2937',
    },
    resetButton: {
        padding: 0,
    },
    resetText: {
        fontSize: 16,
        color: '#5b3a8f',
    },
});

export default FilterHeader;
