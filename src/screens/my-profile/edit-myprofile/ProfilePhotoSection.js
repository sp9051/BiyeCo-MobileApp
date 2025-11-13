import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import UserIcon from './UserIcon';

const ProfilePhotoSection = ({ onUploadPhoto }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Photo</Text>
            <View style={styles.content}>
                <View style={styles.avatarContainer}>
                    <UserIcon size={40} color="#ffffff" />
                </View>
                <View style={styles.uploadSection}>
                    <TouchableOpacity style={styles.uploadButton} onPress={onUploadPhoto}>
                        <Text style={styles.uploadButtonText}>Upload Photo</Text>
                    </TouchableOpacity>
                    <Text style={styles.uploadHint}>JPG, PNG up to 5MB</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        marginHorizontal: 20,
        padding: 24,
        backgroundColor: '#ffffff',
        borderRadius: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: 20,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    avatarContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#8b5cf6',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    uploadSection: {
        flexDirection: 'column',
        gap: 8,
    },
    uploadButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#4c3d7a',
        borderRadius: 8,
    },
    uploadButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '500',
    },
    uploadHint: {
        fontSize: 12,
        color: '#9ca3af',
    },
});

export default ProfilePhotoSection;
