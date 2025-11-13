import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SafetyTipCard = ({ icon, title, description }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                {icon}
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 20,
        flexDirection: 'row',
        gap: 16,
    },
    iconContainer: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#e8d9ff',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        lineHeight: 21,
        color: '#6b7280',
    },
});

export default SafetyTipCard;
