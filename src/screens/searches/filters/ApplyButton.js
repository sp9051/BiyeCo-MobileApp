import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ApplyButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Apply Filters</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: 18,
        backgroundColor: '#5b3a8f',
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
});

export default ApplyButton;
