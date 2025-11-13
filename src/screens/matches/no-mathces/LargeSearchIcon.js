import React from 'react';
import { View, StyleSheet } from 'react-native';

const LargeSearchIcon = ({ color = '#4a3d6b', size = 80 }) => {
    const circleSize = size * 0.625;
    const lineLength = size * 0.25;
    const strokeWidth = 6;

    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <View
                style={[
                    styles.circle,
                    {
                        width: circleSize,
                        height: circleSize,
                        borderColor: color,
                        borderWidth: strokeWidth,
                        borderRadius: circleSize / 2
                    }
                ]}
            />
            <View
                style={[
                    styles.line,
                    {
                        backgroundColor: color,
                        width: lineLength,
                        height: strokeWidth,
                        transform: [{ rotate: '45deg' }],
                        position: 'absolute',
                        bottom: size * 0.125,
                        right: size * 0.125,
                        borderRadius: strokeWidth / 2,
                    }
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        backgroundColor: 'transparent',
    },
    line: {
        borderRadius: 3,
    },
});

export default LargeSearchIcon;
