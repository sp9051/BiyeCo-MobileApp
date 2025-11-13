import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CheckboxItem = ({ checked, onToggle, label }) => (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onToggle}>
        <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
            {checked && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
);

const MaritalStatusFilter = ({ maritalStatus, onToggle }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Marital Status</Text>
            <View style={styles.optionsContainer}>
                <CheckboxItem
                    checked={maritalStatus.neverMarried}
                    onToggle={() => onToggle('neverMarried')}
                    label="Never Married"
                />
                <CheckboxItem
                    checked={maritalStatus.divorced}
                    onToggle={() => onToggle('divorced')}
                    label="Divorced"
                />
                <CheckboxItem
                    checked={maritalStatus.widowed}
                    onToggle={() => onToggle('widowed')}
                    label="Widowed"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: 16,
    },
    optionsContainer: {
        gap: 12,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#d1d5db',
        borderRadius: 4,
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    checkboxChecked: {
        backgroundColor: '#5b3a8f',
        borderColor: '#5b3a8f',
    },
    checkmark: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        color: '#4b5563',
    },
});

export default MaritalStatusFilter;
