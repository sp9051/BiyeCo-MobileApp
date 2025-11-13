import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const CompletionMessage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <Path
                        d="M15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9782 30 15C30 11.0218 28.4196 7.20644 25.6066 4.3934C22.7936 1.58035 18.9782 0 15 0C11.0218 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30ZM21.6211 12.2461L14.1211 19.7461C13.5703 20.2969 12.6797 20.2969 12.1348 19.7461L8.38477 15.9961C7.83398 15.4453 7.83398 14.5547 8.38477 14.0098C8.93555 13.4648 9.82617 13.459 10.3711 14.0098L13.125 16.7637L19.6289 10.2539C20.1797 9.70312 21.0703 9.70312 21.6152 10.2539C22.1602 10.8047 22.166 11.6953 21.6152 12.2402L21.6211 12.2461Z"
                        fill="#8A5EBC"
                    />
                </Svg>
            </View>
            <Text style={styles.primaryText}>You're all caught up!</Text>
            <Text style={styles.secondaryText}>No more notifications to show</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 24,
        gap: 4,
    },
    iconContainer: {
        marginBottom: 4,
    },
    primaryText: {
        color: '#374151',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        margin: 0,
    },
    secondaryText: {
        color: '#6B7280',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        margin: 0,
    },
});

export default CompletionMessage;
