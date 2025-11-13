import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import EyeIcon from './EyeIcon';

const PasswordInput = ({
    label,
    placeholder,
    value,
    onChangeText,
    showPassword,
    onToggleVisibility
}) => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.label}
                accessibilityLabel={label}
            >
                {label}
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    accessibilityLabel={label}
                    accessibilityHint="Enter your password"
                    style={styles.input}
                    placeholderTextColor="#9CA3AF"
                />
                <TouchableOpacity
                    onPress={onToggleVisibility}
                    accessibilityLabel={showPassword ? "Hide password" : "Show password"}
                    accessibilityRole="button"
                    style={styles.eyeButton}
                >
                    <EyeIcon isVisible={showPassword} />
                </TouchableOpacity>
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
        color: '#374151',
        marginBottom: 8,
    },
    inputContainer: {
        position: 'relative',
    },
    input: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 12,
        paddingRight: 48,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        color: '#111827',
        fontSize: 16,
    },
    eyeButton: {
        position: 'absolute',
        right: 12,
        top: 12,
    },
});

export default PasswordInput;
