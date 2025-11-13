import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextInputField = ({ title, value, onChangeText, placeholder }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#9ca3af"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: 16,
    },
    input: {
        width: '100%',
        padding: 16,
        fontSize: 16,
        color: '#1f2937',
        backgroundColor: '#f3f4f6',
        borderRadius: 12,
        borderWidth: 0,
    },
});

export default TextInputField;
