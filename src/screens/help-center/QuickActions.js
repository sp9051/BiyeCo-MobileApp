import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QuickActionButton from './QuickActionButton';
import { LiveChatIcon, EmailIcon, PhoneIcon, VideoIcon } from './Icons';

const QuickActions = ({ onLiveChatPress, onEmailPress, onCallPress, onVideoPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quick Actions</Text>
            <View style={styles.actionsGrid}>
                <QuickActionButton
                    icon={<LiveChatIcon />}
                    title="Live Chat"
                    onPress={onLiveChatPress}
                />
                <QuickActionButton
                    icon={<EmailIcon />}
                    title="Email Support"
                    onPress={onEmailPress}
                />
                <QuickActionButton
                    icon={<PhoneIcon />}
                    title="Call Support"
                    onPress={onCallPress}
                />
                <QuickActionButton
                    icon={<VideoIcon />}
                    title="Video Call"
                    onPress={onVideoPress}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
        padding: 24,
    },
    title: {
        color: '#111827',
        marginBottom: 16,
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    actionsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
});

export default QuickActions;
