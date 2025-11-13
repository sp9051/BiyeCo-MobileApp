import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const FormField = ({
    label,
    value,
    onChangeText,
    placeholder,
    multiline = false,
    numberOfLines = 1,
    style
}) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[
                    styles.input,
                    multiline && styles.multilineInput
                ]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                multiline={multiline}
                numberOfLines={numberOfLines}
                textAlignVertical={multiline ? 'top' : 'center'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#4b5563',
        marginBottom: 8,
    },
    input: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 15,
        color: '#1f2937',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e5e7eb',
        borderRadius: 8,
    },
    multilineInput: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
});

export default FormField;
