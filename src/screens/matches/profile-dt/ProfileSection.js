import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ProfileSection = ({ icon, title, children, hasMenu = false, hasArrow = false }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.iconContainer}>
                    <Text style={styles.icon}>{icon}</Text>
                </View>
                <Text style={styles.title}>{title}</Text>
                {hasMenu && (
                    <TouchableOpacity style={styles.menuButton}>
                        <Text style={styles.menuIcon}>⋯</Text>
                    </TouchableOpacity>
                )}
                {hasArrow && (
                    <TouchableOpacity style={styles.arrowButton}>
                        <Text style={styles.arrowIcon}>→</Text>
                    </TouchableOpacity>
                )}
            </View>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12,
    },
    iconContainer: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#6B4FA0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: 'white',
        fontSize: 14,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1A1A1A',
        flex: 1,
    },
    menuButton: {
        marginLeft: 'auto',
    },
    menuIcon: {
        fontSize: 20,
        color: '#999',
    },
    arrowButton: {
        marginLeft: 'auto',
    },
    arrowIcon: {
        fontSize: 18,
        color: '#999',
    },
});

export default ProfileSection;
