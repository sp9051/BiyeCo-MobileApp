import React, { useState } from 'react';
import {
    View,
    Text,
    Pressable,
    StyleSheet,
    ScrollView,
    SafeAreaView
} from 'react-native';
import FamilyMemberCard from './FamilyMemberCard';
import AddMemberSection from './AddMemberSection';
import FamilyVerificationInfo from './FamilyVerificationInfo';
import InviteMemberModal from './InviteMemberModal';

const BackIcon = () => (
    <View style={styles.backIcon} />
);

const FamilyAccessScreen = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [member1Permissions, setMember1Permissions] = useState({
        canViewProfile: true,
        canSendInterest: true,
        canEditInfo: false,
    });

    const [member2Permissions, setMember2Permissions] = useState({
        canViewProfile: true,
        canSendInterest: false,
        canEditInfo: false,
    });

    const handleMember1PermissionChange = (permission, value) => {
        setMember1Permissions(prev => ({
            ...prev,
            [permission]: value,
        }));
    };

    const handleMember2PermissionChange = (permission, value) => {
        setMember2Permissions(prev => ({
            ...prev,
            [permission]: value,
        }));
    };

    const handleInviteSubmit = (memberData) => {
        console.log('New member invited:', memberData);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <BackIcon />
                <Text style={styles.headerTitle}>Family Access</Text>
            </View>

            <ScrollView style={styles.content}>
                <FamilyMemberCard
                    userId="TBC_86xxxxx31"
                    relation="Mother"
                    permissions={member1Permissions}
                    onPermissionChange={handleMember1PermissionChange}
                />

                <FamilyMemberCard
                    userId="TBC_86xxxxx31"
                    relation="Father"
                    permissions={member2Permissions}
                    onPermissionChange={handleMember2PermissionChange}
                />

                <AddMemberSection onPress={() => setIsModalOpen(true)} />

                <FamilyVerificationInfo />
            </ScrollView>

            <InviteMemberModal
                visible={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleInviteSubmit}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        maxWidth: 390,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderBottomWidth: 0.667,
        borderBottomColor: '#F3F4F6',
        backgroundColor: '#FFFFFF',
    },
    backIcon: {
        width: 18,
        height: 20,
        backgroundColor: '#4B5563',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 28,
        color: '#111827',
    },
    content: {
        flex: 1,
        padding: 24,
    },
});

export default FamilyAccessScreen;
