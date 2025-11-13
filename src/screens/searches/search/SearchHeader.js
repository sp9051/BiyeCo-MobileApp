import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { BackIcon, SearchIcon, FilterIcon } from './IconComponents';

const SearchHeader = ({
    searchText,
    onSearchChange,
    onBackPress,
    onFilterPress
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <TouchableOpacity style={styles.iconButton} onPress={onBackPress}>
                    <BackIcon />
                </TouchableOpacity>

                <View style={styles.searchContainer}>
                    <SearchIcon />
                    <TextInput
                        placeholder="Search by name, ID, or keyword"
                        value={searchText}
                        onChangeText={onSearchChange}
                        style={styles.searchInput}
                        placeholderTextColor="#9e9aa8"
                    />
                </View>

                <TouchableOpacity style={styles.iconButton} onPress={onFilterPress}>
                    <FilterIcon />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16,
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0eff4',
        borderRadius: 24,
        gap: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    searchInput: {
        flex: 1,
        fontSize: 15,
        color: '#1a1a1a',
    },
});

export default SearchHeader;
