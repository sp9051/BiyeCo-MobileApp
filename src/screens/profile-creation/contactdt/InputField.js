import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = ({
    label,
    placeholder,
    value,
    onChangeText,
    keyboardType = 'default',
    required = false,
    style = {},
    ...props
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label} {required && '*'}
            </Text>
            <TextInput
                style={[styles.input, style]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                placeholderTextColor="#9CA3AF"
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        color: '#374151',
        marginBottom: 8,
        fontFamily: 'Inter',
    },
    input: {
        width: '100%',
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        fontSize: 16,
        fontWeight: '400',
        color: '#000',
        fontFamily: 'Inter',
    },
});

export default InputField;
