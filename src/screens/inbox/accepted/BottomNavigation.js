import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

const BottomNavigation = () => {
    const navItems = [
        {
            id: 'home',
            label: 'Home',
            icon: (
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Path
                        d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        fill="#999"
                    />
                </Svg>
            ),
            active: false,
        },
        {
            id: 'matches',
            label: 'Matches',
            icon: (
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Path
                        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                        fill="#999"
                    />
                </Svg>
            ),
            active: false,
        },
        {
            id: 'inbox',
            label: 'Inbox',
            icon: (
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Rect x="3" y="5" width="18" height="14" rx="2" fill="#5b3a8f" />
                    <Path d="M3 8l9 6 9-6" stroke="#fff" strokeWidth="2" />
                </Svg>
            ),
            active: true,
        },
        {
            id: 'chat',
            label: 'Chat',
            icon: (
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Path
                        d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
                        fill="#999"
                    />
                </Svg>
            ),
            active: false,
            hasNotification: true,
        },
        {
            id: 'vendors',
            label: 'Vendors',
            icon: (
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Rect x="3" y="3" width="7" height="7" rx="1" fill="#999" />
                    <Rect x="14" y="3" width="7" height="7" rx="1" fill="#999" />
                    <Rect x="3" y="14" width="7" height="7" rx="1" fill="#999" />
                    <Rect x="14" y="14" width="7" height="7" rx="1" fill="#999" />
                </Svg>
            ),
            active: false,
        },
    ];

    return (
        <View style={styles.container}>
            {navItems.map((item) => (
                <TouchableOpacity key={item.id} style={styles.navItem}>
                    <View style={styles.iconContainer}>
                        {item.icon}
                        {item.hasNotification && <View style={styles.notificationDot} />}
                    </View>
                    <Text
                        style={[
                            styles.label,
                            { color: item.active ? '#5b3a8f' : '#999' },
                            item.active && styles.activeLabel,
                        ]}
                    >
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
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        paddingTop: 8,
        paddingBottom: 20,
        backgroundColor: '#fff',
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        gap: 4,
        padding: 8,
    },
    iconContainer: {
        position: 'relative',
    },
    notificationDot: {
        position: 'absolute',
        top: 4,
        right: -4,
        width: 8,
        height: 8,
        backgroundColor: '#ff4444',
        borderRadius: 4,
    },
    label: {
        fontSize: 11,
    },
    activeLabel: {
        fontWeight: '600',
    },
});

export default BottomNavigation;
