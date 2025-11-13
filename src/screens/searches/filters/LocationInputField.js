import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const LocationInputField = ({ title, value, onChangeText, placeholder }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.icon}>📍</Text>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor="#9ca3af"
                />
            </View>
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
    inputContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        left: 16,
        fontSize: 18,
        color: '#9ca3af',
        zIndex: 1,
    },
    input: {
        flex: 1,
        paddingVertical: 16,
        paddingLeft: 48,
        paddingRight: 16,
        fontSize: 16,
        color: '#1f2937',
        backgroundColor: '#f3f4f6',
        borderRadius: 12,
        borderWidth: 0,
    },
});

export default LocationInputField;
