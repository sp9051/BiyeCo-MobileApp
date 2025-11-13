import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
    HomeIcon,
    HeartIcon,
    InboxIcon,
    ChatIcon,
    VendorsIcon,
    NotificationDot
} from './Icons';

const BottomNavigation = () => {
    const navigationItems = [
        {
            icon: 'home',
            label: 'Home',
            active: false,
        },
        {
            icon: 'heart',
            label: 'Matches',
            active: false,
        },
        {
            icon: 'inbox',
            label: 'Inbox',
            active: true,
            hasNotification: true,
        },
        {
            icon: 'chat',
            label: 'Chat',
            active: false,
            hasNotification: true,
        },
        {
            icon: 'vendors',
            label: 'Vendors',
            active: false,
        },
    ];

    const renderIcon = (iconType, active) => {
        switch (iconType) {
            case 'home':
                return <HomeIcon active={active} />;
            case 'heart':
                return <HeartIcon active={active} />;
            case 'inbox':
                return <InboxIcon active={active} />;
            case 'chat':
                return <ChatIcon active={active} />;
            case 'vendors':
                return <VendorsIcon active={active} />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {navigationItems.map((item) => (
                <TouchableOpacity key={item.label} style={styles.navItem}>
                    <View style={styles.iconContainer}>
                        {renderIcon(item.icon, item.active)}
                        {item.hasNotification && <NotificationDot />}
                    </View>
                    <Text style={[
                        styles.label,
                        { color: item.active ? '#5a3e8f' : '#6c757d' }
                    ]}>
                        {item.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#e9ecef',
        paddingVertical: 12,
        justifyContent: 'space-around',
    },
    navItem: {
        alignItems: 'center',
        gap: 6,
    },
    iconContainer: {
        position: 'relative',
    },
    label: {
        fontSize: 12,
        fontWeight: '500',
    },
});

export default BottomNavigation;
