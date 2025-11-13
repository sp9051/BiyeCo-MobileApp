import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InputField = ({ value, placeholder, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{value || placeholder}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 13,
        paddingRight: 21,
        paddingBottom: 13,
        paddingLeft: 21,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 16,
        color: '#000',
    },
});

export default InputField;
