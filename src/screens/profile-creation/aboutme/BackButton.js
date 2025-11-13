import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { LeftArrowIcon } from './ArrowIcon';

export const BackButton = ({ onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <LeftArrowIcon />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9999,
        backgroundColor: '#F3F4F6',
    },
});
