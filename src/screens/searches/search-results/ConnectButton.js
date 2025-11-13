import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ConnectButton = ({ onPress, title = "Connect Now" }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: '#4a3370',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default ConnectButton;
