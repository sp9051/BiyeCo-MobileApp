import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import TabNavigation from './TabNavigation';
import RequestsSection from './RequestsSection';
import BottomNavigation from './BottomNavigation';

const InboxScreen = () => {
    const [selectedTab, setSelectedTab] = useState('Received');
    const [requests, setRequests] = useState([
        {
            id: 1,
            username: 'TBC_86xxxxx31',
            age: 25,
            profession: 'Software Developer',
            gender: 'NM',
            location: 'Dhaka',
            timeAgo: '2 hours ago',
        },
        {
            id: 2,
            username: 'TBC_86xxxxx31',
            age: 27,
            profession: 'Doctor',
            gender: 'W',
            location: 'Dhaka',
            timeAgo: '5 hours ago',
        },
        {
            id: 3,
            username: 'TBC_86xxxxx31',
            age: 26,
            profession: 'Teacher',
            gender: 'D',
            location: 'Sylhet',
            timeAgo: '1 day ago',
        },
    ]);

    const tabs = ['Accepted', 'Received', 'Sent'];

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const handleAccept = (id) => {
        console.log('Accept request:', id);
    };

    const handleDecline = (id) => {
        console.log('Decline request:', id);
    };

    return (
        <View style={styles.container}>
            <Header />
            <TabNavigation
                selectedTab={selectedTab}
                onTabChange={handleTabChange}
                tabs={tabs}
            />
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <RequestsSection
                    requests={requests}
                    onAccept={handleAccept}
                    onDecline={handleDecline}
                />
            </ScrollView>
            <BottomNavigation />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    },
    content: {
        flex: 1,
    },
});

export default InboxScreen;
