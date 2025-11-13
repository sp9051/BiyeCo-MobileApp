import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const MaritalStatusSelector = ({ selectedStatus, onStatusChange }) => {
    const statuses = ['Never Married', 'Divorced', 'Widowed'];

    const getButtonStyle = (status) => ({
        ...styles.button,
        borderColor: selectedStatus === status ? '#53377A' : '#E5E7EB',
        borderWidth: 2,
        backgroundColor: selectedStatus === status ? 'rgba(83, 55, 122, 0.05)' : '#FFF',
    });

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Marital Status *</Text>
            <View style={styles.buttonContainer}>
                {statuses.map((status) => (
                    <Pressable
                        key={status}
                        onPress={() => onStatusChange(status)}
                        style={getButtonStyle(status)}
                    >
                        <Text style={styles.buttonText}>{status}</Text>
                    </Pressable>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    label: {
        color: '#374151',
        marginBottom: 8,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '500',
        fontFamily: 'Inter',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 12,
        flexWrap: 'wrap',
    },
    button: {
        flex: 1,
        minWidth: 100,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    buttonText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
});

export default MaritalStatusSelector;
