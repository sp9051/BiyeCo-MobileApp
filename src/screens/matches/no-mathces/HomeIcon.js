import React from 'react';
import { View, StyleSheet } from 'react-native';

const HomeIcon = ({ color = '#9d9d9d', size = 24, filled = false }) => {
    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <View style={[styles.roof, { borderBottomColor: color, borderBottomWidth: 2 }]} />
            <View style={[
                styles.house,
                {
                    borderColor: color,
                    borderWidth: 2,
                    backgroundColor: filled ? color : 'transparent',
                    width: size * 0.75,
                    height: size * 0.58
                }
            ]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    roof: {
        width: 0,
        height: 0,
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        marginBottom: -2,
    },
    house: {
        borderTopWidth: 0,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
});

export default HomeIcon;
