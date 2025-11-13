import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import UserProfile from './UserProfile';
import MatchesSection from './MatchesSection';
import SocialLinks from './SocialLinks';
import BottomNavigation from './BottomNavigation';

const HomeScreen = () => {
    const [premiumMatches] = useState([
        {
            id: 1,
            username: "TBCo_86xxxxx89",
            age: 26,
            height: "5'6\"",
            diet: "NM",
            location: "Sydney",
            profession: "Software Engineer",
            verified: true,
        },
        {
            id: 2,
            username: "TBCo_86xxxxx92",
            age: 28,
            height: "5'7\"",
            diet: "NM",
            location: "Melbourne",
            profession: "Software Engineer",
            verified: true,
        },
    ]);

    const [newMatches] = useState([
        {
            id: 1,
            username: "TBC_86xxxxx3 1",
            age: 26,
            height: "5'6\"",
            diet: "D",
            location: "Mumbai",
            profession: "Software Engineer",
            verified: true,
            premium: true,
        },
        {
            id: 2,
            username: "TBC_86xxxxx4 2",
            age: 27,
            height: "5'8\"",
            diet: "D",
            location: "Delhi",
            profession: "Software Engineer",
            verified: true,
            premium: false,
        },
    ]);

    const [activeTab] = useState('Home');

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
                <UserProfile />
                <MatchesSection
                    title="Premium Matches (20)"
                    matches={premiumMatches}
                    isPremium={true}
                />
                <MatchesSection
                    title="New Matches (18)"
                    matches={newMatches}
                    isPremium={false}
                />
                <SocialLinks />
            </ScrollView>
            <BottomNavigation activeTab={activeTab} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    content: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 80,
    },
});

export default HomeScreen;
