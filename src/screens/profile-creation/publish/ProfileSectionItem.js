import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CheckIcon from './CheckIcon';
import WarningIcon from './WarningIcon';

const ProfileSectionItem = ({ title, isCompleted = true, buttonText = "Edit", onPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                {isCompleted ? (
                    <CheckIcon size={16} color="#53377A" />
                ) : (
                    <WarningIcon size={16} color="#53377A" />
                )}
                <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 14,
        paddingRight: 16,
        paddingBottom: 14,
        paddingLeft: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        backgroundColor: '#F9FAFB',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    title: {
        color: '#000',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
    button: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        color: '#374151',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        fontFamily: 'Inter',
    },
});

export default ProfileSectionItem;
