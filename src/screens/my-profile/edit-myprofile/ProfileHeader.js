import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackIcon from './BackIcon';

const ProfileHeader = ({ onBack, onSave }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={onBack}
                    accessibilityLabel="Go back"
                >
                    <BackIcon size={24} color="#1f2937" />
                </TouchableOpacity>
                <Text style={styles.title}>Edit Profile</Text>
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={onSave}>
                <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    backButton: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1f2937',
        margin: 0,
    },
    saveButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    saveText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#6366f1',
    },
});

export default ProfileHeader;
