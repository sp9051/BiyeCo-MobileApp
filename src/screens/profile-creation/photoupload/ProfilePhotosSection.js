import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CameraIcon from './CameraIcon';
import PlusIcon from './PlusIcon';

const ProfilePhotosSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Profile Photos</Text>
                <Text style={styles.photoCount}>3/4 photos</Text>
            </View>
            <Text style={styles.description}>
                Add photos that capture your story. The first one introduces you to everyone.
            </Text>
            <View style={styles.photoGrid}>
                <View style={styles.profilePictureSlot}>
                    <CameraIcon style={styles.cameraIcon} />
                    <Text style={styles.profilePictureText}>Profile Picture</Text>
                    <Text style={styles.requiredText}>Required</Text>
                    <Text style={styles.privacyText}>(Not public. You control every view.)</Text>
                </View>
                <TouchableOpacity style={styles.addPhotoSlot}>
                    <PlusIcon style={styles.plusIcon} />
                    <Text style={styles.addPhotoText}>Add Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addPhotoSlot}>
                    <PlusIcon style={styles.plusIcon} />
                    <Text style={styles.addPhotoText}>Add Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.selfieSlot}>
                    <PlusIcon style={styles.plusIcon} />
                    <Text style={styles.selfieText}>Selfie Verification - Required</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
        paddingRight: 16,
        paddingBottom: 24,
        paddingLeft: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    title: {
        color: '#111827',
        fontSize: 20,
        lineHeight: 28,
        fontWeight: '700',
        fontFamily: 'Inter',
    },
    photoCount: {
        color: '#6B7280',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
    description: {
        color: '#4B5563',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
        fontFamily: 'Inter',
        marginBottom: 24,
    },
    photoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
    },
    profilePictureSlot: {
        borderRadius: 8,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#D1D5DB',
        paddingTop: 45,
        paddingRight: 33,
        paddingBottom: 45,
        paddingLeft: 33,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 159,
        backgroundColor: '#E9DFF6',
        width: '48%',
    },
    addPhotoSlot: {
        borderRadius: 8,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#D1D5DB',
        paddingTop: 53,
        paddingRight: 45,
        paddingBottom: 53,
        paddingLeft: 45,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 159,
        backgroundColor: '#E9DFF6',
        width: '48%',
    },
    selfieSlot: {
        borderRadius: 8,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#D1D5DB',
        paddingTop: 53,
        paddingRight: 20,
        paddingBottom: 53,
        paddingLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 159,
        backgroundColor: '#E9DFF6',
        width: '48%',
    },
    cameraIcon: {
        marginBottom: 8,
    },
    plusIcon: {
        marginBottom: 12,
    },
    profilePictureText: {
        color: '#53377A',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
    requiredText: {
        color: '#53377A',
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
    privacyText: {
        color: '#6B7280',
        fontSize: 8,
        lineHeight: 16,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
    addPhotoText: {
        color: '#53377A',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
    selfieText: {
        color: '#53377A',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
        textAlign: 'center',
    },
});

export default ProfilePhotosSection;
