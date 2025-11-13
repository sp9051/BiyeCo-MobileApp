import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconButton from './IconButton';
import MenuIcon from './MenuIcon';
import SearchIcon from './SearchIcon';
import BellIcon from './BellIcon';
import NotificationBadge from './NotificationBadge';

const Header = ({ title = 'Matches', onMenuPress, onSearchPress, onNotificationPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <IconButton
                    onPress={onMenuPress}
                    accessibilityLabel="Menu"
                >
                    <MenuIcon />
                </IconButton>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.rightSection}>
                <IconButton
                    onPress={onSearchPress}
                    accessibilityLabel="Search"
                >
                    <SearchIcon />
                </IconButton>
                <IconButton
                    onPress={onNotificationPress}
                    accessibilityLabel="Notifications"
                    style={styles.notificationButton}
                >
                    <BellIcon />
                    <NotificationBadge style={styles.notificationBadge} />
                </IconButton>
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
        backgroundColor: '#fff',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#2d2d2d',
        margin: 0,
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    notificationButton: {
        position: 'relative',
    },
    notificationBadge: {
        top: 6,
        right: 6,
    },
});

export default Header;
