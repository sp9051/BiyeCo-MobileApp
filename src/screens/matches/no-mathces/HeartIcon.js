import React from 'react';
import { View, StyleSheet } from 'react-native';

const HeartIcon = ({ color = '#5a4a7d', size = 24, filled = true }) => {
    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <View style={[
                styles.heart,
                {
                    backgroundColor: filled ? color : 'transparent',
                    borderColor: filled ? color : color,
                    borderWidth: filled ? 0 : 2,
                    width: size * 0.9,
                    height: size * 0.8,
                }
            ]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    heart: {
        transform: [{ rotate: '-45deg' }],
        borderRadius: 8,
    },
});

export default HeartIcon;
