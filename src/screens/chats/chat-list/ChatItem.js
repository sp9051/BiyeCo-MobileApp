import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserIcon, DoubleCheckIcon, SingleCheckIcon } from './IconComponents';

const ChatItem = ({ chat }) => {
    const renderStatusIndicator = () => {
        if (chat.status === 'new') {
            return (
                <View style={styles.statusContainer}>
                    <View style={styles.newDot} />
                    <Text style={styles.newText}>New message</Text>
                </View>
            );
        }

        if (chat.status === 'read') {
            return (
                <View style={styles.statusContainer}>
                    <DoubleCheckIcon />
                    <Text style={styles.readText}>Read</Text>
                </View>
            );
        }

        if (chat.status === 'delivered') {
            return (
                <View style={styles.statusContainer}>
                    <SingleCheckIcon />
                    <Text style={styles.deliveredText}>Delivered</Text>
                </View>
            );
        }

        return null;
    };

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                    <UserIcon />
                </View>
                {chat.online && <View style={styles.onlineIndicator} />}
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.headerRow}>
                    <Text style={styles.name}>{chat.name}</Text>
                    <Text style={styles.time}>{chat.time}</Text>
                </View>

                <View style={styles.messageRow}>
                    <Text style={styles.message} numberOfLines={1}>
                        {chat.message}
                    </Text>
                </View>

                <View style={styles.statusRow}>
                    {renderStatusIndicator()}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    avatarContainer: {
        position: 'relative',
        marginRight: 12,
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#8B6BB7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    onlineIndicator: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: '#7B5BA6',
        borderWidth: 3,
        borderColor: '#ffffff',
    },
    contentContainer: {
        flex: 1,
        minWidth: 0,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1a1a1a',
        margin: 0,
    },
    time: {
        fontSize: 13,
        color: '#999999',
    },
    messageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    message: {
        fontSize: 14,
        color: '#6b6b6b',
        margin: 0,
        flex: 1,
    },
    statusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginTop: 4,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    newDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#8B6BB7',
    },
    newText: {
        fontSize: 13,
        color: '#8B6BB7',
        fontWeight: '500',
    },
    readText: {
        fontSize: 13,
        color: '#5B9BD5',
    },
    deliveredText: {
        fontSize: 13,
        color: '#999999',
    },
});

export default ChatItem;
