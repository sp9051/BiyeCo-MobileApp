import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StarIcon } from './IconComponents';

const PremiumCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <StarIcon />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Unlimited Messaging</Text>
                    <Text style={styles.description}>
                        Upgrade to Premium to chat with all your matches
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Upgrade Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 16,
        padding: 24,
        borderRadius: 16,
        backgroundColor: '#F3EEFF',
        borderWidth: 1,
        borderColor: '#E5D9FF',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: '#8B6BB7',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1a1a1a',
        marginBottom: 8,
        margin: 0,
    },
    description: {
        fontSize: 14,
        color: '#6b6b6b',
        margin: 0,
        lineHeight: 21,
    },
    button: {
        width: '100%',
        padding: 14,
        borderRadius: 12,
        backgroundColor: '#5B3A8F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default PremiumCard;
