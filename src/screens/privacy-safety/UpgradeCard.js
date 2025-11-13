import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const UpgradeCard = ({ onUpgradePress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={styles.shieldIcon} />
            </View>
            <Text style={styles.title}>Enhanced Privacy Protection</Text>
            <Text style={styles.description}>
                Upgrade to unlock advanced privacy features and browse profiles anonymously
            </Text>
            <Pressable onPress={onUpgradePress} style={styles.upgradeButton}>
                <Text style={styles.upgradeButtonText}>Upgrade Now</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        paddingVertical: 32,
        paddingHorizontal: 24,
        alignItems: 'center',
        backgroundColor: '#7c3aed',
    },
    iconContainer: {
        width: 56,
        height: 56,
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shieldIcon: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 12,
        textAlign: 'center',
    },
    description: {
        fontSize: 15,
        color: 'rgba(255,255,255,0.9)',
        marginBottom: 24,
        lineHeight: 22,
        textAlign: 'center',
    },
    upgradeButton: {
        backgroundColor: '#fff',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 12,
    },
    upgradeButtonText: {
        color: '#7c3aed',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default UpgradeCard;
