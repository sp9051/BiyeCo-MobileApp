import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const PhoneInput = ({
    label,
    placeholder,
    value,
    onChangeText,
    countryCode = '+880',
    required = false
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label} {required && '*'}
            </Text>
            <View style={styles.inputContainer}>
                <View style={styles.countryCode}>
                    <Text style={styles.countryCodeText}>{countryCode}</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType="phone-pad"
                    placeholderTextColor="#9CA3AF"
                />
            </View>
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
    inputContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    countryCode: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    countryCodeText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#000',
        fontFamily: 'Inter',
    },
    input: {
        flex: 1,
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

export default PhoneInput;
