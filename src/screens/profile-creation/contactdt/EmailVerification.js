import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckCircleIcon } from './Icons';

const EmailVerification = ({
    label,
    placeholder,
    value,
    onChangeText,
    onVerify,
    isVerified = false,
    required = false
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label} {required && '*'}
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType="email-address"
                    placeholderTextColor="#9CA3AF"
                />
                <TouchableOpacity style={styles.verifyButton} onPress={onVerify}>
                    <Text style={styles.verifyButtonText}>Verify</Text>
                </TouchableOpacity>
            </View>
            {isVerified && (
                <View style={styles.verificationStatus}>
                    <CheckCircleIcon />
                    <Text style={styles.verificationText}>Email verified</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
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
        position: 'relative',
    },
    input: {
        width: '100%',
        paddingVertical: 14,
        paddingLeft: 16,
        paddingRight: 80,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        fontSize: 16,
        fontWeight: '400',
        color: '#000',
        fontFamily: 'Inter',
    },
    verifyButton: {
        position: 'absolute',
        right: 11,
        top: '50%',
        transform: [{ translateY: -12.5 }],
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: '#53377A',
    },
    verifyButtonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
    verificationStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 8,
    },
    verificationText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#4B5563',
        fontFamily: 'Inter',
    },
});

export default EmailVerification;
