import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckIcon, MoreIcon, EducationIcon, HeartIcon, LocationIcon } from './Icons';

const ProfileCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageSection}>
                <View style={styles.matchBadge}>
                    <Text style={styles.matchText}>94% Match</Text>
                </View>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatarHead} />
                    <View style={styles.avatarBody} />
                </View>
            </View>

            <View style={styles.contentSection}>
                <View style={styles.headerRow}>
                    <View style={styles.nameSection}>
                        <Text style={styles.name}>TBCo_86xxxxx31</Text>
                        <CheckIcon size={24} />
                    </View>
                    <MoreIcon />
                </View>

                <Text style={styles.details}>25 | Software Developer | NM | Sydney</Text>

                <View style={styles.infoSection}>
                    <View style={styles.infoRow}>
                        <EducationIcon />
                        <Text style={styles.infoText}>Masters in Computer Science</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <HeartIcon />
                        <Text style={styles.infoText}>Looking for a life partner</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <LocationIcon />
                        <Text style={styles.infoText}>Within 15 km from you</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.connectButton}>
                    <Text style={styles.connectButtonText}>Connect Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 24,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4
    },
    imageSection: {
        position: 'relative',
        width: '100%',
        height: 450,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa'
    },
    matchBadge: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: '#ffffff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2
    },
    matchText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#5a3d7a'
    },
    avatarContainer: {
        alignItems: 'center'
    },
    avatarHead: {
        width: 80,
        height: 80,
        backgroundColor: '#c4a5d8',
        borderRadius: 40
    },
    avatarBody: {
        width: 140,
        height: 70,
        backgroundColor: '#c4a5d8',
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        marginTop: -10
    },
    contentSection: {
        padding: 24
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    nameSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    name: {
        fontSize: 22,
        fontWeight: '700',
        color: '#1f2937'
    },
    details: {
        fontSize: 15,
        color: '#6b7280',
        marginBottom: 20
    },
    infoSection: {
        gap: 12,
        marginBottom: 24
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    infoText: {
        fontSize: 15,
        color: '#4b5563'
    },
    connectButton: {
        width: '100%',
        padding: 16,
        backgroundColor: '#5a3d7a',
        borderRadius: 12,
        alignItems: 'center'
    },
    connectButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600'
    }
});

export default ProfileCard;
