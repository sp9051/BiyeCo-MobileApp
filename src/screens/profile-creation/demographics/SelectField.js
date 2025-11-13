import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SelectField = ({ placeholder, value, onPress, style }) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>
                {value || placeholder}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 13,
        paddingHorizontal: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        backgroundColor: '#FFFFFF',
    },
    text: {
        color: '#000000',
        fontFamily: 'Inter',
        fontSize: 16,
        lineHeight: 19,
        fontWeight: '400',
    },
});

export default SelectField;
