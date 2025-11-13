import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormField = ({ label, required = false, children, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>
                {label}
                {required && ' *'}
            </Text>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    label: {
        color: '#374151',
        fontFamily: 'Inter',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '500',
    },
});

export default FormField;
