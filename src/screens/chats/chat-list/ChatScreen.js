import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ChatHeader from './ChatHeader';
import ChatTabs from './ChatTabs';
import ChatList from './ChatList';
import BottomNavigation from './BottomNavigation';

const ChatScreen = () => {
    const [activeTab, setActiveTab] = useState('All');

    const [chats] = useState([
        {
            id: 1,
            name: 'TBC_86xxxxxx31',
            message: 'That sounds great! Looking forward to...',
            time: '2:30 PM',
            status: 'new',
            online: true,
        },
        {
            id: 2,
            name: 'TBC_86xxxxxx31',
            message: 'Thank you for the interest. I\'d like to...',
            time: 'Yesterday',
            status: 'read',
            online: true,
        },
        {
            id: 3,
            name: 'TBC_86xxxxxx31',
            message: 'Hi! Nice to connect with you...',
            time: '2 days ago',
            status: 'delivered',
            online: true,
        },
        {
            id: 4,
            name: 'TBC_86xxxxxx31',
            message: 'Would love to know more about your...',
            time: '3 days ago',
            status: 'read',
            online: true,
        },
    ]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <View style={styles.container}>
            <ChatHeader />
            <ChatTabs activeTab={activeTab} onTabChange={handleTabChange} />
            <ChatList chats={chats} />
            <BottomNavigation />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        maxWidth: 384,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        backgroundColor: '#ffffff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
});

export default ChatScreen;
