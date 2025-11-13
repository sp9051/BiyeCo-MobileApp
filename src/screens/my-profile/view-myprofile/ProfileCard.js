import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { UserIcon, CheckIcon, LocationIcon, EditIcon, StarIcon } from './IconComponents';

const ProfileCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        <UserIcon size={50} color="#7C4DFF" />
                    </View>
                    <View style={styles.verifiedBadge}>
                        <CheckIcon size={16} color="white" />
                    </View>
                </View>
                <Text style={styles.name}>TBC_86xxxxx31</Text>
                <Text style={styles.details}>28 years • NM • Engineer</Text>
                <View style={styles.locationContainer}>
                    <LocationIcon size={16} color="rgba(255, 255, 255, 0.8)" />
                    <Text style={styles.location}>Dhaka, Bangladesh</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.editButton}>
                        <EditIcon size={20} color="white" />
                        <Text style={styles.buttonText}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.upgradeButton}>
                        <StarIcon size={20} color="white" />
                        <Text style={styles.buttonText}>Upgrade</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7C4DFF',
        paddingHorizontal: 16,
        paddingBottom: 24,
        paddingTop: 0,
    },
    card: {
        borderRadius: 16,
        padding: 24,
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 16,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    verifiedBadge: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#9C6EFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#7C4DFF',
    },
    name: {
        color: 'white',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 8,
    },
    details: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 16,
        marginBottom: 4,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginBottom: 16,
    },
    location: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 14,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 16,
    },
    editButton: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 12,
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    upgradeButton: {
        flex: 1,
        backgroundColor: '#9C6EFF',
        borderRadius: 12,
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default ProfileCard;
