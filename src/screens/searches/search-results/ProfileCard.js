import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MatchBadge from './MatchBadge';
import ProfileAvatar from './ProfileAvatar';
import UserInfo from './UserInfo';
import ConnectButton from './ConnectButton';
import { CheckIcon, MoreDotsIcon } from './Icons';

const ProfileCard = ({
    userId = "TBC_86xxxxxx31",
    isVerified = true,
    matchPercentage = 94,
    onConnect,
    onMoreOptions
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarSection}>
                <MatchBadge percentage={matchPercentage} />
                <ProfileAvatar />
            </View>
            <View style={styles.contentSection}>
                <View style={styles.header}>
                    <View style={styles.userIdSection}>
                        <Text style={styles.userId}>{userId}</Text>
                        {isVerified && (
                            <View style={styles.verificationBadge}>
                                <CheckIcon />
                            </View>
                        )}
                    </View>
                    <TouchableOpacity onPress={onMoreOptions} style={styles.moreButton}>
                        <MoreDotsIcon />
                    </TouchableOpacity>
                </View>
                <UserInfo />
                <ConnectButton onPress={onConnect} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        overflow: 'hidden',
    },
    avatarSection: {
        position: 'relative',
        height: 420,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
    },
    contentSection: {
        padding: 24,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    userIdSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    userId: {
        fontSize: 22,
        fontWeight: '700',
        color: '#2d2d2d',
        margin: 0,
    },
    verificationBadge: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#5e4a8b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    moreButton: {
        padding: 4,
    },
});

export default ProfileCard;
