import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ClockIcon, CloseIcon } from './IconComponents';

const RecentSearches = ({ searches, onRemoveSearch }) => {
    if (!searches || searches.length === 0) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Recent Searches</Text>
            <View style={styles.searchList}>
                {searches.map((search, index) => (
                    <View
                        key={`${search}-${index}`}
                        style={[
                            styles.searchItem,
                            index < searches.length - 1 && styles.searchItemBorder
                        ]}
                    >
                        <View style={styles.searchContent}>
                            <ClockIcon />
                            <Text style={styles.searchText}>{search}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.removeButton}
                            onPress={() => onRemoveSearch(index)}
                        >
                            <CloseIcon />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 20,
    },
    searchList: {
        // Container for search items
    },
    searchItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
    },
    searchItemBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#e8e7ec',
    },
    searchContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    searchText: {
        fontSize: 16,
        color: '#5a5766',
        fontWeight: '400',
    },
    removeButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default RecentSearches;
