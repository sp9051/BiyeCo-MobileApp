import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import ArrowIcon from './ArrowIcon';

const BackButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} accessibilityLabel="Go back">
            <ArrowIcon direction="left" color="#4B5563" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 9999,
        backgroundColor: '#F3F4F6',
    },
});

export default BackButton;
