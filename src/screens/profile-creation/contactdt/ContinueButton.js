import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { ArrowRightIcon } from './Icons';

const ContinueButton = ({ onPress, title = 'Continue' }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
            <ArrowRightIcon />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: 18,
        borderRadius: 16,
        backgroundColor: '#53377A',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginBottom: 24,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 28,
        color: '#FFF',
        fontFamily: 'Inter',
    },
});

export default ContinueButton;
