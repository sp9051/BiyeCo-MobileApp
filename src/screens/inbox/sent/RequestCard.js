import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { UserIcon, VerifiedIcon } from './Icons';

const RequestCard = ({ request, onCancel }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.avatarContainer}>
                    <UserIcon />
                </View>
                <View style={styles.details}>
                    <View style={styles.usernameRow}>
                        <Text style={styles.username}>{request.username}</Text>
                        {request.verified && <VerifiedIcon />}
                    </View>
                    <Text style={styles.info}>
                        {request.age} | {request.profession} | {request.gender} | {request.location}
                    </Text>
                    <View style={styles.badges}>
                        <View style={styles.mutualBadge}>
                            <Text style={styles.mutualText}>Mutual Interest</Text>
                        </View>
                        <View style={styles.matchBadge}>
                            <Text style={styles.matchText}>{request.match}% Match</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.cancelButton} onPress={() => onCancel(request.id)}>
                        <Text style={styles.cancelText}>Cancel request</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        marginBottom: 16,
    },
    content: {
        flexDirection: 'row',
        gap: 16,
    },
    avatarContainer: {
        width: 80,
        height: 80,
        backgroundColor: '#e9d5ff',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    details: {
        flex: 1,
    },
    usernameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 6,
    },
    username: {
        fontSize: 18,
        fontWeight: '600',
        color: '#212529',
    },
    info: {
        fontSize: 14,
        color: '#6c757d',
        marginBottom: 12,
    },
    badges: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 12,
    },
    mutualBadge: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        backgroundColor: '#f3e8ff',
        borderRadius: 20,
    },
    mutualText: {
        color: '#a855f7',
        fontSize: 13,
        fontWeight: '500',
    },
    matchBadge: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        backgroundColor: '#a855f7',
        borderRadius: 20,
    },
    matchText: {
        color: '#ffffff',
        fontSize: 13,
        fontWeight: '500',
    },
    cancelButton: {
        width: '100%',
        paddingVertical: 12,
        backgroundColor: '#f1f3f5',
        borderRadius: 8,
        alignItems: 'center',
    },
    cancelText: {
        color: '#6c757d',
        fontSize: 15,
        fontWeight: '500',
    },
});

export default RequestCard;
