import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const ChatMessage = ({ message, timestamp, isOwn = false, showAvatar = true, showDeliveryStatus = false }) => {
    const Avatar = () => (
        <View style={styles.avatar}>
            <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <Path
                    d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                    fill="#ffffff"
                />
            </Svg>
        </View>
    );

    if (isOwn) {
        return (
            <View style={styles.ownMessageContainer}>
                <View style={styles.ownMessageContent}>
                    <View style={styles.ownMessageBubble}>
                        <Text style={styles.ownMessageText}>{message}</Text>
                    </View>
                    <View style={styles.ownMessageMeta}>
                        <Text style={styles.timestamp}>{timestamp}</Text>
                        {showDeliveryStatus && (
                            <Svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <Path
                                    d="M0.41 13.41L6 19L7.41 17.59L1.83 12L7.41 6.41L6 5L0.41 10.59C-0.19 11.19 -0.19 12.19 0.41 12.81L0.41 13.41ZM12.41 13.41L18 19L19.41 17.59L13.83 12L19.41 6.41L18 5L12.41 10.59C11.81 11.19 11.81 12.19 12.41 12.81L12.41 13.41Z"
                                    fill="#7c5ba6"
                                />
                            </Svg>
                        )}
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.messageContainer}>
            {showAvatar && <Avatar />}
            <View style={styles.messageContent}>
                <View style={styles.messageBubble}>
                    <Text style={styles.messageText}>{message}</Text>
                </View>
                <Text style={styles.timestampLeft}>{timestamp}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 8,
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#7c5ba6',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    messageContent: {
        flexDirection: 'column',
        maxWidth: '75%',
    },
    messageBubble: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    messageText: {
        fontSize: 15,
        lineHeight: 21,
        color: '#1a1a1a',
    },
    timestampLeft: {
        fontSize: 12,
        color: '#999999',
        marginTop: 4,
        marginLeft: 8,
    },
    ownMessageContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    ownMessageContent: {
        flexDirection: 'column',
        maxWidth: '75%',
        alignItems: 'flex-end',
    },
    ownMessageBubble: {
        backgroundColor: '#6b4ba1',
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    ownMessageText: {
        fontSize: 15,
        lineHeight: 21,
        color: '#ffffff',
    },
    ownMessageMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginTop: 4,
        marginRight: 8,
    },
    timestamp: {
        fontSize: 12,
        color: '#999999',
    },
});

export default ChatMessage;
