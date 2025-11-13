import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NotificationIcon from './NotificationIcon';

const NotificationItem = ({ notification }) => {
    const getBorderStyle = () => {
        if (notification.unread) {
            return {
                borderWidth: 0.667,
                borderColor: notification.borderColor,
                borderLeftWidth: 4,
                borderLeftColor: notification.borderColor,
            };
        }
        return {
            borderWidth: 1,
            borderColor: '#F3F4F6',
        };
    };

    const renderContent = () => {
        if (notification.type === 'message') {
            return (
                <View style={styles.contentText}>
                    <Text style={styles.messageText}>{notification.message}</Text>
                    <Text style={styles.userText}>{notification.user}</Text>
                </View>
            );
        }

        if (notification.type === 'offer') {
            return (
                <Text style={styles.offerTitle}>{notification.title}</Text>
            );
        }

        if (notification.type === 'match') {
            return (
                <View style={styles.matchContent}>
                    <Text style={styles.messageText}>{notification.message}</Text>
                    <Text style={styles.userText}>{notification.user}</Text>
                    <Text style={styles.messageText}>!</Text>
                </View>
            );
        }

        return (
            <View style={styles.contentText}>
                <Text style={styles.userText}>{notification.user}</Text>
                <Text style={styles.messageText}>{notification.message}</Text>
            </View>
        );
    };

    return (
        <View style={[styles.container, getBorderStyle()]}>
            <View style={styles.iconContainer}>
                <NotificationIcon type={notification.type} />
            </View>
            <View style={styles.content}>
                {renderContent()}
                {notification.preview && (
                    <Text style={styles.preview}>{notification.preview}</Text>
                )}
                <Text style={styles.time}>{notification.time}</Text>
            </View>
            {notification.unread && (
                <View
                    style={[
                        styles.unreadDot,
                        { backgroundColor: notification.dotColor },
                    ]}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
        paddingVertical: 17,
        paddingHorizontal: 20,
        borderRadius: 12,
        position: 'relative',
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 9999,
        backgroundColor: '#E9D5FF',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    content: {
        flex: 1,
    },
    contentText: {
        fontSize: 14,
        lineHeight: 20,
        color: '#111827',
        margin: 0,
    },
    messageText: {
        fontWeight: '500',
    },
    userText: {
        fontWeight: '700',
    },
    offerTitle: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        color: '#111827',
        margin: 0,
    },
    matchContent: {
        fontSize: 14,
        lineHeight: 20,
        color: '#111827',
        margin: 0,
    },
    preview: {
        fontSize: 12,
        lineHeight: 16,
        color: '#6B7280',
        marginTop: 1,
    },
    time: {
        fontSize: 12,
        lineHeight: 16,
        color: '#6B7280',
        marginTop: 1,
    },
    unreadDot: {
        width: 8,
        height: 8,
        borderRadius: 9999,
        position: 'absolute',
        top: 24,
        right: 20,
    },
});

export default NotificationItem;
