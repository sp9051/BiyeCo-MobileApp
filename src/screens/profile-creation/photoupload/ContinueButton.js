import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ArrowRightIcon from './ArrowRightIcon';

const ContinueButton = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Continue</Text>
                <ArrowRightIcon />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        paddingRight: 16,
        paddingBottom: 30,
        paddingLeft: 16,
    },
    button: {
        width: '100%',
        padding: 19,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#53377A',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
});

export default ContinueButton;
