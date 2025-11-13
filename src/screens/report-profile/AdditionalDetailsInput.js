import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const AdditionalDetailsInput = ({ value, onChangeText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Additional Details</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Share a brief description of the issue…"
                placeholderTextColor="#9CA3AF"
                value={value}
                onChangeText={onChangeText}
                multiline
                textAlignVertical="top"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        maxWidth: 338,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F3F4F6',
        padding: 21,
    },
    title: {
        color: '#111827',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        fontFamily: 'Inter',
        marginBottom: 16,
    },
    textInput: {
        width: '100%',
        height: 121,
        paddingTop: 15,
        paddingHorizontal: 17,
        paddingBottom: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        color: '#374151',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
        fontFamily: 'Inter',
        backgroundColor: '#FFFFFF',
    },
});

export default AdditionalDetailsInput;
