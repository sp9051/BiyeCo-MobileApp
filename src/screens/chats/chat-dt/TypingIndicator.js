import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const TypingIndicator = () => {
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

    return (
        <View style={styles.container}>
            <Avatar />
            <View style={styles.typingBubble}>
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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
    typingBubble: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 20,
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#b0b0b0',
    },
});

export default TypingIndicator;
