import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormField = ({ label, children, required = false }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.label, required && styles.requiredLabel]}>
                {label}{required && ' *'}
            </Text>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    label: {
        fontSize: 14,
        color: '#000',
        marginBottom: 8,
        lineHeight: 20,
    },
    requiredLabel: {
        fontWeight: '500',
        color: '#374151',
    },
});

export default FormField;
