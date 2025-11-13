import React from 'react';
import { View, StyleSheet } from 'react-native';

const SearchIcon = ({ color = '#4a3d6b', size = 24, strokeWidth = 2 }) => {
    const circleSize = size * 0.58;
    const lineLength = size * 0.21;

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
        borderRadius: 1,
    },
});

export default SearchIcon;
