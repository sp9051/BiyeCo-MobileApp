import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ToggleButton = ({ label, selected, onPress }) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                selected ? styles.buttonSelected : styles.buttonUnselected,
            ]}
            onPress={onPress}
        >
            <Text
                style={[
                    styles.buttonText,
                    selected ? styles.buttonTextSelected : styles.buttonTextUnselected,
                ]}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 24,
        borderWidth: 0,
    },
    buttonSelected: {
        backgroundColor: '#6C5DD3',
    },
    buttonUnselected: {
        backgroundColor: '#F8F7FC',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    buttonTextSelected: {
        color: '#FFFFFF',
    },
    buttonTextUnselected: {
        color: '#9E9CAF',
    },
});

export default ToggleButton;
