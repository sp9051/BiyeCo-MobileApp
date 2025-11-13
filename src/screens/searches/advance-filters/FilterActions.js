import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const FilterActions = ({ onReset, onApply }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.resetButton} onPress={onReset}>
                <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applyButton} onPress={onApply}>
                <Text style={styles.applyText}>Apply</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 12,
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#F0EFF5',
    },
    resetButton: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F8F7FC',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resetText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#6C5DD3',
    },
    applyButton: {
        flex: 1,
        padding: 16,
        backgroundColor: '#6C5DD3',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    applyText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
    },
});

export default FilterActions;
