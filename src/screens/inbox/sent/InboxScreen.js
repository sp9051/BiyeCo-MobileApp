import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from './Header';
import TabNavigation from './TabNavigation';
import RequestsSection from './RequestsSection';
import BottomNavigation from './BottomNavigation';

const InboxScreen = () => {
    const [activeTab, setActiveTab] = useState('sent');
    const [requests, setRequests] = useState([
        {
            id: 1,
            username: 'TBC_86xxxxx31',
            age: 26,
            profession: 'Engineer',
            gender: 'NM',
            location: 'Dhaka',
            verified: true,
            match: 96,
        },
        {
            id: 2,
            username: 'TBC_86xxxxx32',
            age: 26,
            profession: 'Doctor',
            gender: 'W',
            location: 'Syhet',
            verified: true,
            match: 96,
        },
        {
            id: 3,
            username: 'TBC_86xxxxx32',
            age: 26,
            profession: 'Teacher',
            gender: 'D',
            location: 'Rajsahi',
            verified: true,
            match: 96,
        },
    ]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleCancelRequest = (id) => {
        setRequests(requests.filter((req) => req.id !== id));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Header />
                <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
                <RequestsSection requests={requests} onCancelRequest={handleCancelRequest} />
                <BottomNavigation />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    content: {
        flex: 1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
});

export default InboxScreen;
