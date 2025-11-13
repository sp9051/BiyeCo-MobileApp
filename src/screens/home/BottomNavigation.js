import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { HomeIcon, HeartIcon, MailIcon, ChatIcon, VendorIcon } from './Icons';

const BottomNavigation = ({ activeTab = 'Home' }) => {
    const tabs = [
        { id: 'Home', label: 'Home', icon: HomeIcon, active: true },
        { id: 'Matches', label: 'Matches', icon: HeartIcon, active: false },
        { id: 'Inbox', label: 'Inbox', icon: MailIcon, active: false },
        { id: 'Chat', label: 'Chat', icon: ChatIcon, active: false, hasNotification: true },
        { id: 'Vendors', label: 'Vendors', icon: VendorIcon, active: false },
    ];

    return (
        <View style={styles.container}>
            {tabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = tab.id === activeTab;

                return (
                    <TouchableOpacity key={tab.id} style={styles.tabItem}>
                        <View style={styles.iconContainer}>
                            <IconComponent
                                color={isActive ? '#5a3d7a' : '#868e96'}
                                size={24}
                            />
                            {tab.hasNotification && (
                                <View style={styles.notificationDot} />
                            )}
                        </View>
                        <Text style={[
                            styles.tabLabel,
                            isActive && styles.activeTabLabel
                        ]}>
                            {tab.label}
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
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#e9ecef',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 12,
        paddingHorizontal: 0,
    },
    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
    },
    iconContainer: {
        position: 'relative',
    },
    notificationDot: {
        position: 'absolute',
        top: -2,
        right: -6,
        width: 8,
        height: 8,
        backgroundColor: '#dc3545',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#ffffff',
    },
    tabLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: '#868e96',
    },
    activeTabLabel: {
        color: '#5a3d7a',
    },
});

export default BottomNavigation;
