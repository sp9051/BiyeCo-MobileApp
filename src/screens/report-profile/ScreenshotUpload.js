import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import UploadIcon from './UploadIcon';

const ScreenshotUpload = ({ onUpload }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Attach Screenshot (Optional)</Text>
            <TouchableOpacity style={styles.uploadArea} onPress={onUpload}>
                <UploadIcon />
                <Text style={styles.uploadText}>Add a photo to support your report.</Text>
                <Text style={styles.uploadSubtext}>PNG, JPG up to 2MB</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        maxWidth: 338,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F3F4F6',
        padding: 21,
    },
    title: {
        color: '#111827',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        fontFamily: 'Inter',
        marginBottom: 16,
    },
    uploadArea: {
        width: '100%',
        height: 128,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#E5E7EB',
        borderStyle: 'dashed',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    uploadText: {
        color: '#4B5563',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
    uploadSubtext: {
        color: '#9CA3AF',
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
});

export default ScreenshotUpload;
