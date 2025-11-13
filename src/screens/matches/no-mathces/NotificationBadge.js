import React from 'react';
import { View, StyleSheet } from 'react-native';

const NotificationBadge = ({ style }) => {
    return <View style={[styles.badge, style]} />;
};

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        width: 10,
        height: 10,
        backgroundColor: '#e74c3c',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#fff',
    },
});

export default NotificationBadge;
