import React from 'react';
import { View, StyleSheet } from 'react-native';

const BellIcon = ({ color = '#4a3d6b', size = 24 }) => {
    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <View style={[styles.bellBody, { borderColor: color, width: size * 0.75, height: size * 0.58 }]} />
            <View style={[styles.bellBottom, { backgroundColor: color, width: size * 0.25, height: 2 }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bellBody: {
        borderWidth: 2,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        backgroundColor: 'transparent',
    },
    bellBottom: {
        marginTop: 2,
        borderRadius: 1,
    },
});

export default BellIcon;
