import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileHeader from './ProfileHeader';
import ProfileCard from './ProfileCard';
import NavigationTabs from './NavigationTabs';
import ProfileContent from './ProfileContent';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <ProfileHeader />
            <ProfileCard />
            <NavigationTabs />
            <ProfileContent />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
});

export default ProfileScreen;
