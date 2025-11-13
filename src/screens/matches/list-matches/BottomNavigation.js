import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { HomeIcon, HeartIcon, InboxIcon, ChatIcon, VendorsIcon } from './Icons';

const BottomNavigation = () => {
    const navItems = [
        { key: 'home', label: 'Home', icon: HomeIcon, active: false },
        { key: 'matches', label: 'Matches', icon: HeartIcon, active: true },
        { key: 'inbox', label: 'Inbox', icon: InboxIcon, active: false },
        { key: 'chat', label: 'Chat', icon: ChatIcon, active: false, showBadge: true },
        { key: 'vendors', label: 'Vendors', icon: VendorsIcon, active: false }
    ];

    return (
        <View style={styles.container}>
            {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                    <TouchableOpacity key={item.key} style={styles.navItem}>
                        <View style={styles.iconContainer}>
                            <IconComponent
                                color={item.active ? '#5a3d7a' : '#9ca3af'}
                                size={24}
                                showBadge={item.showBadge}
                            />
                        </View>
                        <Text style={[
                            styles.navLabel,
                            item.active && styles.activeNavLabel
                        ]}>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        backgroundColor: '#ffffff'
    },
    navItem: {
        alignItems: 'center',
        gap: 4
    },
    iconContainer: {
        position: 'relative'
    },
    navLabel: {
        fontSize: 11,
        color: '#9ca3af',
        fontWeight: '500'
    },
    activeNavLabel: {
        color: '#5a3d7a',
        fontWeight: '600'
    }
});

export default BottomNavigation;
