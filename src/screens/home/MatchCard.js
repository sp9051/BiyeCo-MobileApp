import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { UserIcon, VerifiedIcon, StarIcon } from './Icons';

const MatchCard = ({ match, isPremium = false }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileSection}>
                <View style={styles.avatarContainer}>
                    <UserIcon size={35} />
                </View>
                <View style={styles.profileInfo}>
                    <View style={styles.nameSection}>
                        <Text style={styles.username}>{match.username}</Text>
                        {match.verified && <VerifiedIcon size={16} />}
                        {match.premium && (
                            <View style={styles.premiumBadge}>
                                <StarIcon size={10} color="white" />
                            </View>
                        )}
                    </View>
                    <Text style={styles.details}>
                        {match.age} | {match.height} | {match.diet} | {match.location}
                    </Text>
                    <Text style={styles.profession}>{match.profession}</Text>
                </View>
            </View>
            <TouchableOpacity style={[styles.connectButton, isPremium && styles.premiumButton]}>
                <Text style={[styles.connectButtonText, isPremium && styles.premiumButtonText]}>
                    Connect Now
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        minWidth: 280,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 20,
        marginRight: 12,
    },
    profileSection: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 16,
    },
    avatarContainer: {
        width: 70,
        height: 70,
        borderRadius: 12,
        backgroundColor: '#e8e3f0',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
    },
    profileInfo: {
        flex: 1,
    },
    nameSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 6,
    },
    username: {
        fontSize: 16,
        fontWeight: '600',
        color: '#212529',
        margin: 0,
    },
    premiumBadge: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: '#5a3d7a',
        justifyContent: 'center',
        alignItems: 'center',
    },
    details: {
        fontSize: 13,
        color: '#6c757d',
        marginBottom: 4,
        margin: 0,
    },
    profession: {
        fontSize: 13,
        color: '#868e96',
        margin: 0,
    },
    connectButton: {
        width: '100%',
        padding: 12,
        backgroundColor: '#7c5fa6',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    premiumButton: {
        backgroundColor: '#5a3d7a',
    },
    connectButtonText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#ffffff',
    },
    premiumButtonText: {
        color: '#ffffff',
    },
});

export default MatchCard;
