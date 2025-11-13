import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ChatItem from './ChatItem';
import PremiumCard from './PremiumCard';

const ChatList = ({ chats }) => {
    return (
        <ScrollView style={styles.container}>
            {chats.map((chat) => (
                <ChatItem key={chat.id} chat={chat} />
            ))}
            <PremiumCard />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
});

export default ChatList;
