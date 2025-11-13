import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export const ProfileHeadlineInput = ({ value, onChangeText, maxLength = 50 }) => (
    <View style={styles.container}>
        <View style={styles.labelContainer}>
            <Text style={styles.label}>Defining Myself *</Text>
        </View>
        <TextInput
            placeholder="e.g., Software Engineer looking for life partner"
            value={value}
            maxLength={maxLength}
            onChangeText={onChangeText}
            style={styles.textInput}
        />
        <View style={styles.helperContainer}>
            <Text style={styles.helperText}>
                This appears as your profile title ({maxLength} characters max)
            </Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    labelContainer: {},
    label: {
        color: '#111827',
        marginBottom: 12,
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    textInput: {
        width: '100%',
        paddingTop: 13,
        paddingRight: 16,
        paddingBottom: 14,
        paddingLeft: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        color: '#111827',
        fontSize: 15,
        fontFamily: 'Inter',
        fontWeight: '400',
    },
    helperContainer: {},
    helperText: {
        color: '#6B7280',
        marginTop: 10,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
});
