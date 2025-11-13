import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from './Header';
import EmptyState from './EmptyState';
import BottomNavigation from './BottomNavigation';

const MatchesScreen = () => {
    const handleMenuPress = () => {
        console.log('Menu pressed');
    };

    const handleSearchPress = () => {
        console.log('Search pressed');
    };

    const handleNotificationPress = () => {
        console.log('Notifications pressed');
    };

    const handleAdjustFilters = () => {
        console.log('Adjust filters pressed');
    };

    const handleTabPress = (tabId) => {
        console.log(`Tab pressed: ${tabId}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Header
                    title="Matches"
                    onMenuPress={handleMenuPress}
                    onSearchPress={handleSearchPress}
                    onNotificationPress={handleNotificationPress}
                />
                <EmptyState onAdjustFilters={handleAdjustFilters} />
                <BottomNavigation
                    activeTab="Matches"
                    onTabPress={handleTabPress}
                />
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
        flexDirection: 'column',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
});

export default MatchesScreen;
