import React from 'react';
import { View, StyleSheet } from 'react-native';

const MenuIcon = ({ color = '#4a3d6b', size = 24 }) => {
    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <View style={[styles.line, { backgroundColor: color }]} />
            <View style={[styles.line, { backgroundColor: color }]} />
            <View style={[styles.line, { backgroundColor: color }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    line: {
        width: '100%',
        height: 2,
        borderRadius: 1,
    },
});

export default MenuIcon;
