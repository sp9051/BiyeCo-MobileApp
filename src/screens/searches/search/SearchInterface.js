import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SearchHeader from './SearchHeader';
import RecentSearches from './RecentSearches';
import QuickFilters from './QuickFilters';

const SearchInterface = () => {
    const [searchText, setSearchText] = useState('');

    const [recentSearches, setRecentSearches] = useState([
        'Software Engineer',
        'Dhaka',
        '25-28 years',
    ]);

    const [quickFilters] = useState([
        'Age 25-30',
        'Same City',
        'Verified',
        'Premium',
        'Recently Active',
    ]);

    const handleSearchChange = (text) => {
        setSearchText(text);
    };

    const handleBackPress = () => {
        // Handle back navigation
        console.log('Back pressed');
    };

    // const handleFilterPress = () => {
    //     // Handle filter button press
    //     console.log('Filter pressed');
    // };

    const handleRemoveSearch = (index) => {
        setRecentSearches(prev => prev.filter((_, i) => i !== index));
    };

    const handleFilterPress = (filter) => {
        // Handle quick filter selection
        console.log('Filter selected:', filter);
    };

    return (
        <View style={styles.container}>
            <SearchHeader
                searchText={searchText}
                onSearchChange={handleSearchChange}
                onBackPress={handleBackPress}
                onFilterPress={handleFilterPress}
            />

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <RecentSearches
                    searches={recentSearches}
                    onRemoveSearch={handleRemoveSearch}
                />

                <QuickFilters
                    filters={quickFilters}
                    onFilterPress={handleFilterPress}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f7fc',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 24,
    },
});

export default SearchInterface;
