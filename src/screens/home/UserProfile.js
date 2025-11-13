import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { UserIcon, VerifiedIcon, EditIcon, StarIcon } from './Icons';

const UserProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profileSection}>
                <View style={styles.avatarContainer}>
                    <UserIcon size={40} />
                </View>
                <View style={styles.profileInfo}>
                    <View style={styles.nameSection}>
                        <Text style={styles.username}>TBCo_86xxxxx23</Text>
                        <VerifiedIcon size={20} />
                    </View>
                    <Text style={styles.subtitle}>Porichoy - Browse Only</Text>
                </View>
            </View>
            <View style={styles.buttonSection}>
                <TouchableOpacity style={styles.editButton}>
                    <EditIcon size={20} />
                    <Text style={styles.editButtonText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.upgradeButton}>
                    <StarIcon size={20} color="white" />
                    <Text style={styles.upgradeButtonText}>Upgrade Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingVertical: 24,
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        marginBottom: 20,
    },
    avatarContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#e8e3f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileInfo: {
        flex: 1,
    },
    nameSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 4,
    },
    username: {
        fontSize: 20,
        fontWeight: '600',
        color: '#212529',
        margin: 0,
    },
    subtitle: {
        fontSize: 14,
        color: '#6c757d',
        margin: 0,
    },
    buttonSection: {
        flexDirection: 'row',
        gap: 12,
    },
    editButton: {
        flex: 1,
        paddingVertical: 14,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#e9ecef',
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    editButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#5a3d7a',
    },
    upgradeButton: {
        flex: 1,
        paddingVertical: 14,
        paddingHorizontal: 20,
        backgroundColor: '#7c5fa6',
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    upgradeButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
    },
});

export default UserProfile;
