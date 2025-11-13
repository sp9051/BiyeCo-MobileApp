import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NotificationItem from './NotificationItem';

const NotificationSection = ({ title, notifications, isFirst = false }) => {
    return (
        <View style={[styles.container, !isFirst && styles.containerWithoutTopPadding]}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View style={styles.notificationsList}>
                {notifications.map((notification) => (
                    <NotificationItem key={notification.id} notification={notification} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    containerWithoutTopPadding: {
        paddingTop: 0,
    },
    sectionTitle: {
        color: '#6B7280',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        marginBottom: 16,
    },
    notificationsList: {
        gap: 13,
    },
});

export default NotificationSection;
