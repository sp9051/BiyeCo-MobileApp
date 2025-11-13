import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserIcon, HelpIcon, MenuDotsIcon } from './IconComponents';
import PermissionToggle from './PermissionToggle';

const FamilyMemberCard = ({ member, onTogglePermission }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatar}>
                    <UserIcon width={16} height={18} color="#E9D5FF" />
                </View>
                <View style={styles.memberInfo}>
                    <Text style={styles.name}>{member.name}</Text>
                    <Text style={styles.role}>{member.role}</Text>
                </View>
                <View style={styles.actions}>
                    <HelpIcon width={18} height={18} color="#53377A" />
                    <MenuDotsIcon width={4} height={16} color="#9CA3AF" />
                </View>
            </View>

            <View style={styles.permissions}>
                <PermissionToggle
                    label="Can View Profile"
                    value={member.canViewProfile}
                    onToggle={() => onTogglePermission(member.id, 'canViewProfile')}
                />
                <PermissionToggle
                    label="Can Send Interest"
                    value={member.canSendInterest}
                    onToggle={() => onTogglePermission(member.id, 'canSendInterest')}
                />
                <PermissionToggle
                    label="Can Edit Info"
                    value={member.canEditInfo}
                    onToggle={() => onTogglePermission(member.id, 'canEditInfo')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F3F4F6',
        padding: 21,
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 50,
        backgroundColor: '#F3E8FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    memberInfo: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2D2D2D',
        lineHeight: 24,
    },
    role: {
        fontSize: 14,
        fontWeight: '400',
        color: '#6B7280',
        lineHeight: 20,
    },
    actions: {
        flexDirection: 'row',
        gap: 8,
    },
    permissions: {
        gap: 12,
    },
});

export default FamilyMemberCard;
