import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { HomeIcon, HeartIcon, MailIcon, ChatIcon, ShoppingIcon } from './Icons';

const BottomNavigation = () => {
    const navItems = [
        { key: 'home', label: 'Home', icon: HomeIcon, active: false },
        { key: 'matches', label: 'Matches', icon: HeartIcon, active: false },
        { key: 'inbox', label: 'Inbox', icon: MailIcon, active: true, badge: true },
        { key: 'chat', label: 'Chat', icon: ChatIcon, active: false, badge: true },
        { key: 'vendors', label: 'Vendors', icon: ShoppingIcon, active: false },
    ];

    return (
        <View style={styles.container}>
            {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                    <TouchableOpacity key={item.key} style={styles.navItem}>
                        <View style={styles.iconContainer}>
                            <IconComponent color={item.active ? '#6c3fb5' : '#6c757d'} />
                            {item.badge && <View style={styles.badge} />}
                        </View>
                        <Text
                            style={[
                                styles.label,
                                {
                                    color: item.active ? '#6c3fb5' : '#6c757d',
                                    fontWeight: item.active ? '500' : 'normal',
                                },
                            ]}
                        >
                            {item.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
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
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        gap: 4,
    },
    iconContainer: {
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: -2,
        right: -4,
        width: 8,
        height: 8,
        backgroundColor: '#dc3545',
        borderRadius: 4,
    },
    label: {
        fontSize: 12,
    },
});

export default BottomNavigation;
