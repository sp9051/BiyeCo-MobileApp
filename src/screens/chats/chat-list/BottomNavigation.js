import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
    HomeIcon,
    HeartIcon,
    InboxIcon,
    ChatIcon,
    VendorsIcon
} from './IconComponents';

const BottomNavigation = () => {
    const navigationItems = [
        {
            name: 'Home',
            icon: 'home',
            active: false,
        },
        {
            name: 'Matches',
            icon: 'heart',
            active: false,
        },
        {
            name: 'Inbox',
            icon: 'inbox',
            active: false,
        },
        {
            name: 'Chat',
            icon: 'chat',
            active: true,
            badge: true,
        },
        {
            name: 'Vendors',
            icon: 'vendors',
            active: false,
        },
    ];

    const renderIcon = (item) => {
        const iconProps = { active: item.active };

        switch (item.icon) {
            case 'home':
                return <HomeIcon {...iconProps} />;
            case 'heart':
                return <HeartIcon {...iconProps} />;
            case 'inbox':
                return <InboxIcon {...iconProps} />;
            case 'chat':
                return (
                    <View style={styles.iconWithBadge}>
                        <ChatIcon {...iconProps} />
                        {item.badge && <View style={styles.badge} />}
                    </View>
                );
            case 'vendors':
                return <VendorsIcon {...iconProps} />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {navigationItems.map((item) => (
                <TouchableOpacity
                    key={item.name}
                    style={styles.navItem}
                    accessibilityLabel={item.name}
                >
                    <View style={styles.iconContainer}>
                        {renderIcon(item)}
                    </View>
                    <Text style={[
                        styles.label,
                        {
                            fontWeight: item.active ? '600' : '400',
                            color: item.active ? '#5B3A8F' : '#999999',
                        }
                    ]}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 0,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    navItem: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    iconContainer: {
        position: 'relative',
    },
    iconWithBadge: {
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: -4,
        right: -4,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#E74C3C',
    },
    label: {
        fontSize: 11,
    },
});

export default BottomNavigation;
