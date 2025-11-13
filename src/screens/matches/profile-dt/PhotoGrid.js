import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ProfileSection from './ProfileSection';

const PhotoGrid = () => {
    return (
        <ProfileSection
            icon="📷"
            title="Photos"
        >
            <View style={styles.container}>
                <View style={styles.premiumBadge}>
                    <Text style={styles.premiumText}>Premium</Text>
                </View>

                <View style={styles.photoGrid}>
                    <View style={[styles.photoBox, styles.lightPurple]}>
                        <Text style={styles.lockIcon}>🔒</Text>
                    </View>
                    <View style={[styles.photoBox, styles.mediumPurple]}>
                        <Text style={styles.lockIcon}>🔒</Text>
                    </View>
                    <View style={[styles.photoBox, styles.darkPurple]}>
                        <Text style={styles.lockIcon}>🔒</Text>
                    </View>
                </View>

                <Text style={styles.upgradeText}>
                    Upgrade to Premium to view all photos
                </Text>
            </View>
        </ProfileSection>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
    premiumBadge: {
        position: 'absolute',
        top: -28,
        right: 0,
        paddingVertical: 2,
        paddingHorizontal: 8,
        backgroundColor: '#F0E6FF',
        borderRadius: 4,
    },
    premiumText: {
        color: '#6B4FA0',
        fontSize: 11,
        fontWeight: '600',
    },
    photoGrid: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 12,
    },
    photoBox: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightPurple: {
        backgroundColor: '#E8D5F8',
    },
    mediumPurple: {
        backgroundColor: '#B888E8',
    },
    darkPurple: {
        backgroundColor: '#6B4FA0',
    },
    lockIcon: {
        fontSize: 32,
    },
    upgradeText: {
        textAlign: 'center',
        color: '#999',
        fontSize: 13,
    },
});

export default PhotoGrid;
