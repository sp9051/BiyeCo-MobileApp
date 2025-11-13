import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextInputField = ({ value, onChangeText, placeholder, style, ...props }) => {
    return (
        <TextInput
            style={[styles.input, style]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#9CA3AF"
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        backgroundColor: '#FFFFFF',
        color: '#000000',
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: '400',
    },
});

export default TextInputField;
