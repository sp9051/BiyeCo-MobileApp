import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ConnectButton = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Connect Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: 'rgba(248, 249, 250, 0.95)',
    },
    button: {
        width: '100%',
        paddingVertical: 16,
        backgroundColor: '#6B4FA0',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default ConnectButton;
