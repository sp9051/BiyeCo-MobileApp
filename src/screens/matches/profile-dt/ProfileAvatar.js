import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ProfileAvatar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                    <View style={styles.innerAvatar} />
                </View>
            </View>

            <View style={styles.userInfo}>
                <View style={styles.nameContainer}>
                    <Text style={styles.userName}>TBCo_86xxxxx12</Text>
                    <View style={styles.verifiedBadge}>
                        <Text style={styles.verifiedIcon}>✓</Text>
                    </View>
                </View>
                <Text style={styles.userDetails}>25 • Software Developer • NM • Mumbai</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 40,
    },
    avatarContainer: {
        marginBottom: 16,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#B8A8E8',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
    },
    innerAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#9888D8',
        marginBottom: -10,
    },
    userInfo: {
        alignItems: 'center',
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
    },
    userName: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    verifiedBadge: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#7B68C8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    verifiedIcon: {
        color: 'white',
        fontSize: 12,
    },
    userDetails: {
        color: 'white',
        fontSize: 13,
        opacity: 0.9,
    },
});

export default ProfileAvatar;
