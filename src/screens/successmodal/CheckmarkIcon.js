import React from 'react';
import { View, StyleSheet } from 'react-native';

const CheckmarkIcon = ({ size = 80, backgroundColor = '#8A5EBC' }) => {
    return (
        <View style={[styles.container, { width: size, height: size, backgroundColor }]}>
            <View style={styles.checkmark}>
                <View style={styles.checkmarkStem} />
                <View style={styles.checkmarkKick} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 9999,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmark: {
        width: 21,
        height: 16,
        position: 'relative',
    },
    checkmarkStem: {
        position: 'absolute',
        width: 3,
        height: 9,
        backgroundColor: 'white',
        left: 11,
        top: 2,
        transform: [{ rotate: '45deg' }],
        borderRadius: 1,
    },
    checkmarkKick: {
        position: 'absolute',
        width: 3,
        height: 6,
        backgroundColor: 'white',
        left: 6,
        top: 8,
        transform: [{ rotate: '-45deg' }],
        borderRadius: 1,
    },
});

export default CheckmarkIcon;
