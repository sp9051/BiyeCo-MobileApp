import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavigationTab from './NavigationTab';
import HomeIcon from './HomeIcon';
import HeartIcon from './HeartIcon';
import InboxIcon from './InboxIcon';
import ChatIcon from './ChatIcon';
import ShoppingBagIcon from './ShoppingBagIcon';

const BottomNavigation = ({ activeTab = 'Matches', onTabPress }) => {
    const tabs = [
        {
            id: 'Home',
            label: 'Home',
            icon: <HomeIcon />,
        },
        {
            id: 'Matches',
            label: 'Matches',
            icon: <HeartIcon />,
        },
        {
            id: 'Inbox',
            label: 'Inbox',
            icon: <InboxIcon />,
        },
        {
            id: 'Chat',
            label: 'Chat',
            icon: <ChatIcon />,
            showBadge: true,
            badgeStyle: { top: 4, right: 12 },
        },
        {
            id: 'Vendors',
            label: 'Vendors',
            icon: <ShoppingBagIcon />,
        },
    ];

    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <NavigationTab
                    key={tab.id}
                    icon={tab.icon}
                    label={tab.label}
                    isActive={activeTab === tab.id}
                    onPress={() => onTabPress?.(tab.id)}
                    showBadge={tab.showBadge}
                    badgeStyle={tab.badgeStyle}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#e8e8e8',
        paddingVertical: 12,
        backgroundColor: '#fff',
    },
});

export default BottomNavigation;
