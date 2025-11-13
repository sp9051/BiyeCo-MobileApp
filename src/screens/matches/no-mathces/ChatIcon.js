import React from 'react';
import { View, StyleSheet } from 'react-native';

const ChatIcon = ({ color = '#9d9d9d', size = 24 }) => {
    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <View style={[
                styles.bubble,
                {
                    borderColor: color,
                    borderWidth: 2,
                    width: size * 0.85,
                    height: size * 0.65,
                }
            ]} />
            <View style={[
                styles.tail,
                {
                    borderTopColor: color,
                    borderRightColor: color,
                }
            ]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    bubble: {
        borderRadius: 8,
        backgroundColor: 'transparent',
    },
    tail: {
        width: 0,
        height: 0,
        borderTopWidth: 6,
        borderRightWidth: 6,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        marginLeft: 4,
        marginTop: -2,
    },
});

export default ChatIcon;
