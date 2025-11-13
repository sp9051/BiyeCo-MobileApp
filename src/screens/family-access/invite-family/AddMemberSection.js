import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const PlusIcon = () => (
    <View style={styles.plusIcon} />
);

const AddMemberSection = ({ onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <PlusIcon />
            <Text style={styles.title}>Invite Family Member</Text>
            <Text style={styles.description}>
                Allow trusted family members to help you find matches
            </Text>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Add Member</Text>
            </Pressable>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#E5E7EB',
        borderStyle: 'dashed',
        paddingVertical: 26,
        paddingHorizontal: 32,
        marginBottom: 16,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    plusIcon: {
        width: 21,
        height: 24,
        backgroundColor: '#9CA3AF',
        marginBottom: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: '#374151',
        lineHeight: 24,
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
        textAlign: 'center',
        marginBottom: 16,
    },
    button: {
        paddingVertical: 9,
        paddingHorizontal: 24,
        borderRadius: 8,
        backgroundColor: '#53377A',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
    },
});

export default AddMemberSection;
