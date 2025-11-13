import React, { useState } from 'react';
import {
    View,
    Text,
    Pressable,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import { BackArrowIcon, PlusIcon, HelpIcon } from './IconComponents';
import FamilyMemberCard from './FamilyMemberCard';
import InviteMemberModal from './InviteMemberModal';

const FamilyAccessScreen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [familyMembers, setFamilyMembers] = useState([
        {
            id: 1,
            name: 'TBC_86xxxxx31',
            role: 'Mother • Verified',
            canViewProfile: true,
            canSendInterest: true,
            canEditInfo: false,
        },
        {
            id: 2,
            name: 'TBC_86xxxxx31',
            role: 'Father • Verified',
            canViewProfile: true,
            canSendInterest: false,
            canEditInfo: false,
        },
    ]);

    const togglePermission = (memberId, permission) => {
        setFamilyMembers(prevMembers =>
            prevMembers.map(member =>
                member.id === memberId
                    ? { ...member, [permission]: !member[permission] }
                    : member
            )
        );
    };

    const handleAddMember = (memberData) => {
        const newMember = {
            id: familyMembers.length + 1,
            name: `${memberData.firstName} ${memberData.lastName}`,
            role: `${memberData.relation} • Pending`,
            canViewProfile: false,
            canSendInterest: false,
            canEditInfo: false,
        };
        setFamilyMembers(prev => [...prev, newMember]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <BackArrowIcon width={18} height={20} color="#4B5563" />
                <Text style={styles.headerTitle}>Family Access</Text>
            </View>

            <ScrollView style={styles.content}>
                {familyMembers.map((member) => (
                    <FamilyMemberCard
                        key={member.id}
                        member={member}
                        onTogglePermission={togglePermission}
                    />
                ))}

                <View style={styles.inviteSection}>
                    <PlusIcon width={21} height={24} color="#9CA3AF" />
                    <Text style={styles.inviteTitle}>Invite Family Member</Text>
                    <Text style={styles.inviteDescription}>
                        Allow trusted family members to help you find matches
                    </Text>
                    <Pressable style={styles.addButton} onPress={() => setIsModalOpen(true)}>
                        <Text style={styles.addButtonText}>Add Member</Text>
                    </Pressable>
                </View>

                <View style={styles.verificationSection}>
                    <HelpIcon width={18} height={18} color="#53377A" style={styles.verificationIcon} />
                    <View style={styles.verificationContent}>
                        <Text style={styles.verificationTitle}>Family Verification</Text>
                        <Text style={styles.verificationDescription}>
                            Family verified profiles get 5x more responses and build trust with potential matches.
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <InviteMemberModal
                visible={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleAddMember}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        maxWidth: 414,
        alignSelf: 'center',
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderBottomWidth: 0.667,
        borderBottomColor: '#F3F4F6',
        gap: 12,
        backgroundColor: '#FFFFFF',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
        lineHeight: 28,
    },
    content: {
        flex: 1,
        padding: 24,
    },
    inviteSection: {
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#E5E7EB',
        borderStyle: 'dashed',
        paddingVertical: 26,
        paddingHorizontal: 32,
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
    },
    inviteTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#374151',
        lineHeight: 24,
        marginTop: 8,
        marginBottom: 8,
    },
    inviteDescription: {
        fontSize: 14,
        fontWeight: '400',
        color: '#6B7280',
        lineHeight: 20,
        textAlign: 'center',
        marginBottom: 16,
    },
    addButton: {
        paddingVertical: 9,
        paddingHorizontal: 24,
        backgroundColor: '#53377A',
        borderRadius: 8,
    },
    addButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
    },
    verificationSection: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#DBEAFE',
        backgroundColor: '#F3E8FF',
        padding: 21,
        paddingLeft: 51,
        position: 'relative',
    },
    verificationIcon: {
        position: 'absolute',
        left: 21,
        top: 27,
    },
    verificationContent: {
        flex: 1,
    },
    verificationTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#53377A',
        lineHeight: 20,
        marginBottom: 4,
    },
    verificationDescription: {
        fontSize: 12,
        fontWeight: '400',
        color: '#53377A',
        lineHeight: 16,
    },
});

export default FamilyAccessScreen;
