import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import ArrowIcon from './ArrowIcon';

const ContinueButton = ({ onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
            <ArrowIcon />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        borderRadius: 16,
        backgroundColor: '#53377A',
    },
    buttonText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
});

export default ContinueButton;
