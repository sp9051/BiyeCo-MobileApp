import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import SearchInfo from './SearchInfo';
import ProfileCard from './ProfileCard';

const SearchResultsScreen = () => {
    const handleBackPress = () => {
        console.log('Back pressed');
    };

    const handleMenuPress = () => {
        console.log('Menu pressed');
    };

    const handleConnect = () => {
        console.log('Connect pressed');
    };

    const handleMoreOptions = () => {
        console.log('More options pressed');
    };

    return (
        <View style={styles.container}>
            <Header
                onBackPress={handleBackPress}
                onMenuPress={handleMenuPress}
            />
            <SearchInfo matchCount={24} />
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.cardContainer}>
                    <ProfileCard
                        userId="TBC_86xxxxxx31"
                        isVerified={true}
                        matchPercentage={94}
                        onConnect={handleConnect}
                        onMoreOptions={handleMoreOptions}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
        flex: 1,
    },
    cardContainer: {
        padding: 20,
    },
});

export default SearchResultsScreen;
