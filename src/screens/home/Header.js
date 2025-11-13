import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { HamburgerIcon, SearchIcon, NotificationIcon } from './Icons';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <TouchableOpacity>
                    <HamburgerIcon />
                </TouchableOpacity>
                <Text style={styles.title}>Home</Text>
            </View>
            <View style={styles.rightSection}>
                <TouchableOpacity>
                    <SearchIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notificationContainer}>
                    <NotificationIcon />
                    <View style={styles.notificationBadge} />
                </TouchableOpacity>
            </View>
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
        borderBottomColor: '#e9ecef',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#5a3d7a',
        margin: 0,
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    notificationContainer: {
        position: 'relative',
    },
    notificationBadge: {
        position: 'absolute',
        top: -2,
        right: -2,
        width: 10,
        height: 10,
        backgroundColor: '#dc3545',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#ffffff',
    },
});

export default Header;
