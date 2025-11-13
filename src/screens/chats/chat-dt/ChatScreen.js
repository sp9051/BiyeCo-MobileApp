import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import RespectModeNotice from './RespectModeNotice';
import ChatInput from './ChatInput';

const ChatScreen = () => {
  const messages = [
    {
      id: 1,
      message: "Hi! Thank you for showing interest in my profile. I'd love to get to know you better.",
      timestamp: "2:28 PM",
      isOwn: false,
    },
    {
      id: 2,
      message: "Hi Priya! Thank you for accepting. I'm excited to connect with you too.",
      timestamp: "2:30 PM",
      isOwn: true,
      showDeliveryStatus: true,
    },
    {
      id: 3,
      message: "I see we have similar interests in traveling and reading. What's the last book you read?",
      timestamp: "2:32 PM",
      isOwn: false,
    },
    {
      id: 4,
      message: "I just finished \"The Alchemist\" by Paulo Coelho. It's such an inspiring book! What about you?",
      timestamp: "2:35 PM",
      isOwn: true,
      showDeliveryStatus: true,
    },
  ];

  return (
    <View style={styles.container}>
      <ChatHeader />

      <ScrollView style={styles.messagesContainer} contentContainerStyle={styles.messagesContent}>
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg.message}
            timestamp={msg.timestamp}
            isOwn={msg.isOwn}
            showDeliveryStatus={msg.showDeliveryStatus}
          />
        ))}
        <TypingIndicator />
      </ScrollView>

      <RespectModeNotice />
      <ChatInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
    gap: 16,
  },
});

export default ChatScreen;
