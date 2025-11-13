import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { UserIcon, VerifiedIcon } from './Icons';

const RequestCard = ({ request, onAccept, onDecline }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.avatar}>
                    <UserIcon />
                </View>
                <View style={styles.details}>
                    <View style={styles.header}>
                        <Text style={styles.username}>{request.username}</Text>
                        <VerifiedIcon />
                    </View>
                    <Text style={styles.info}>
                        {request.age} | {request.profession} | {request.gender} | {request.location}
                    </Text>
                    <Text style={styles.timeInfo}>
                        Received interest {request.timeAgo}
                    </Text>
                    <View style={styles.actions}>
                        <TouchableOpacity
                            style={styles.acceptButton}
                            onPress={() => onAccept(request.id)}
                        >
                            <Text style={styles.acceptButtonText}>Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.declineButton}
                            onPress={() => onDecline(request.id)}
                        >
                            <Text style={styles.declineButtonText}>Decline</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
    },
    content: {
        flexDirection: 'row',
        gap: 16,
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 16,
        backgroundColor: '#e9d8ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    details: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 8,
    },
    username: {
        fontSize: 18,
        fontWeight: '600',
        color: '#212529',
    },
    info: {
        fontSize: 14,
        color: '#6c757d',
        marginBottom: 8,
    },
    timeInfo: {
        fontSize: 14,
        color: '#6c757d',
        marginBottom: 16,
    },
    actions: {
        flexDirection: 'row',
        gap: 12,
    },
    acceptButton: {
        flex: 1,
        paddingVertical: 14,
        paddingHorizontal: 24,
        backgroundColor: '#5a3e8f',
        borderRadius: 12,
        alignItems: 'center',
    },
    acceptButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffff',
    },
    declineButton: {
        flex: 1,
        paddingVertical: 14,
        paddingHorizontal: 24,
        backgroundColor: '#f1f3f5',
        borderRadius: 12,
        alignItems: 'center',
    },
    declineButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#6c757d',
    },
});

export default RequestCard;
