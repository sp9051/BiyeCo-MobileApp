import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PermissionToggle from './PermissionToggle';

const UserIcon = () => (
    <View style={styles.userIconContainer}>
        <View style={styles.userIcon} />
    </View>
);

const HelpIcon = () => (
    <View style={styles.helpIcon} />
);

const MoreIcon = () => (
    <View style={styles.moreIcon} />
);

const FamilyMemberCard = ({
    userId,
    relation,
    permissions,
    onPermissionChange
}) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <UserIcon />
                <View style={styles.userInfo}>
                    <Text style={styles.userId}>{userId}</Text>
                    <Text style={styles.relation}>{relation} • Verified</Text>
                </View>
                <View style={styles.actions}>
                    <HelpIcon />
                    <MoreIcon />
                </View>
            </View>

            <View style={styles.permissions}>
                <PermissionToggle
                    label="Can View Profile"
                    value={permissions.canViewProfile}
                    onToggle={() => onPermissionChange('canViewProfile', !permissions.canViewProfile)}
                />
                <PermissionToggle
                    label="Can Send Interest"
                    value={permissions.canSendInterest}
                    onToggle={() => onPermissionChange('canSendInterest', !permissions.canSendInterest)}
                />
                <PermissionToggle
                    label="Can Edit Info"
                    value={permissions.canEditInfo}
                    onToggle={() => onPermissionChange('canEditInfo', !permissions.canEditInfo)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F3F4F6',
        padding: 21,
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 18,
    },
    userIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 9999,
        backgroundColor: '#E9D5FF',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    userIcon: {
        width: 16,
        height: 18,
        backgroundColor: '#E9D5FF',
    },
    userInfo: {
        flex: 1,
        marginLeft: 12,
    },
    userId: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2D2D2D',
        lineHeight: 24,
        marginBottom: 0,
    },
    relation: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
        marginTop: 0,
    },
    actions: {
        flexDirection: 'row',
        gap: 8,
    },
    helpIcon: {
        width: 18,
        height: 18,
        backgroundColor: '#53377A',
        borderRadius: 9,
    },
    moreIcon: {
        width: 4,
        height: 16,
        backgroundColor: '#9CA3AF',
        borderRadius: 2,
    },
    permissions: {
        gap: 12,
    },
});

export default FamilyMemberCard;
