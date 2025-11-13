import React from 'react';
import { View, StyleSheet } from 'react-native';

const InboxIcon = ({ color = '#9d9d9d', size = 24 }) => {
    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <View style={[
                styles.inbox,
                {
                    borderColor: color,
                    borderWidth: 2,
                    width: size * 0.9,
                    height: size * 0.75,
                }
            ]}>
                <View style={[styles.fold, { borderBottomColor: color }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inbox: {
        borderRadius: 4,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fold: {
        width: 0,
        height: 0,
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderBottomWidth: 4,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
    },
});

export default InboxIcon;
