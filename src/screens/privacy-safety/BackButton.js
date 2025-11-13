import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';

const BackButton = ({ onPress, style }) => {
    return (
        <Pressable onPress={onPress} style={[styles.button, style]}>
            <View style={styles.iconContainer}>
                <View style={styles.chevronLeft} />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    chevronLeft: {
        width: 8,
        height: 8,
        borderLeftWidth: 2,
        borderTopWidth: 2,
        borderColor: '#000',
        transform: [{ rotate: '-45deg' }],
        marginLeft: 2,
    },
});

export default BackButton;
