import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import NotificationHeader from './NotificationHeader';
import NotificationTabs from './NotificationTabs';
import NotificationSection from './NotificationSection';
import CompletionMessage from './CompletionMessage';

const NotificationScreen = () => {
    const [activeTab, setActiveTab] = useState('All');

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: 'profile_view',
            user: 'TBC_86xxxxx31',
            message: 'viewed your profile',
            time: '2 hours ago',
            unread: true,
            category: 'today',
            borderColor: '#8A5EBC',
            dotColor: '#8A5EBC',
        },
        {
            id: 2,
            type: 'message',
            user: 'TBC_86xxxxx31',
            message: 'New message from',
            preview: '"Hi! I\'d love to know more about you."',
            time: '3 hours ago',
            unread: true,
            category: 'today',
            borderColor: '#9A6ACF',
            dotColor: '#3B82F6',
        },
        {
            id: 3,
            type: 'profile_view',
            user: 'TBC_86xxxxx31',
            message: 'viewed your profile',
            time: '5 hours ago',
            unread: false,
            category: 'today',
        },
        {
            id: 4,
            type: 'offer',
            title: 'Special Offer: 50% off Premium',
            preview: 'Limited time offer expires in 2 days',
            time: '1 day ago',
            unread: false,
            category: 'yesterday',
        },
        {
            id: 5,
            type: 'match',
            user: 'TBC_86xxxxx31',
            message: 'It\'s a match with',
            preview: 'Start a conversation now',
            time: '1 day ago',
            unread: false,
            category: 'yesterday',
        },
    ]);

    const tabs = ['All', 'Matches', 'Messages', 'Offers'];

    const handleMarkAllRead = () => {
        setNotifications(prev =>
            prev.map(notification => ({
                ...notification,
                unread: false,
            }))
        );
    };

    const handleTabPress = (tab) => {
        setActiveTab(tab);
    };

    const todayNotifications = notifications.filter(n => n.category === 'today');
    const yesterdayNotifications = notifications.filter(n => n.category === 'yesterday');

    return (
        <View style={styles.container}>
            <NotificationHeader onMarkAllRead={handleMarkAllRead} />
            <NotificationTabs
                tabs={tabs}
                activeTab={activeTab}
                onTabPress={handleTabPress}
            />
            <ScrollView style={styles.scrollView}>
                <NotificationSection
                    title="Today"
                    notifications={todayNotifications}
                    isFirst={true}
                />
                <NotificationSection
                    title="Yesterday"
                    notifications={yesterdayNotifications}
                />
                <CompletionMessage />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: 386,
        backgroundColor: '#F9FAFB',
        fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
    },
    scrollView: {
        flex: 1,
    },
});

export default NotificationScreen;
