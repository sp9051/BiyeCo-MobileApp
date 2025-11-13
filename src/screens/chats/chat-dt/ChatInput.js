import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

const ChatInput = () => {
    const [messageInput, setMessageInput] = useState('');

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.attachButton}>
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Path
                        d="M16.5 6V17.5C16.5 19.71 14.71 21.5 12.5 21.5C10.29 21.5 8.5 19.71 8.5 17.5V5C8.5 3.62 9.62 2.5 11 2.5C12.38 2.5 13.5 3.62 13.5 5V15.5C13.5 16.05 13.05 16.5 12.5 16.5C11.95 16.5 11.5 16.05 11.5 15.5V6H10V15.5C10 16.88 11.12 18 12.5 18C13.88 18 15 16.88 15 15.5V5C15 2.79 13.21 1 11 1C8.79 1 7 2.79 7 5V17.5C7 20.54 9.46 23 12.5 23C15.54 23 18 20.54 18 17.5V6H16.5Z"
                        fill="#757575"
                    />
                </Svg>
            </TouchableOpacity>

            <TextInput
                style={styles.textInput}
                placeholder="Type a message..."
                value={messageInput}
                onChangeText={setMessageInput}
                multiline
            />

            <TouchableOpacity style={styles.emojiButton}>
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Path
                        d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM15.5 11C16.33 11 17 10.33 17 9.5C17 8.67 16.33 8 15.5 8C14.67 8 14 8.67 14 9.5C14 10.33 14.67 11 15.5 11ZM8.5 11C9.33 11 10 10.33 10 9.5C10 8.67 9.33 8 8.5 8C7.67 8 7 8.67 7 9.5C7 10.33 7.67 11 8.5 11ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z"
                        fill="#6b4ba1"
                    />
                </Svg>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sendButton}>
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Path
                        d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"
                        fill="#ffffff"
                    />
                </Svg>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        gap: 12,
    },
    attachButton: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        flex: 1,
        fontSize: 15,
        paddingVertical: 8,
        color: '#1a1a1a',
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    },
    emojiButton: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#6b4ba1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ChatInput;
